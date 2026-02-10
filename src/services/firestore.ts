import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where
} from 'firebase/firestore';
import { db } from '../firebase';
import type { ChatLog, Appointment } from '../types';
import { COLLECTIONS } from '../utils/constants';

/**
 * Firestore Service
 * Handles all database operations for chat logs and appointments
 */

/**
 * Save a chat message to Firestore
 * @param userMessage - User's message
 * @param aiMessage - AI's response
 * @param hospitalId - Hospital identifier
 */
export const saveChat = async (
  userMessage: string,
  aiMessage: string,
  hospitalId: string = 'demo-hospital'
): Promise<string | null> => {
  try {
    const chatData: Omit<ChatLog, 'id'> = {
      userMessage,
      aiMessage,
      hospitalId,
      createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.CHATS), chatData);
    console.log('Chat saved with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving chat:', error);
    return null;
  }
};

/**
 * Save an appointment request to Firestore
 * This will trigger the Cloud Function to send email notification
 * @param appointment - Appointment data
 */
export const saveAppointment = async (
  appointment: Omit<Appointment, 'id' | 'createdAt'>
): Promise<string | null> => {
  try {
    const appointmentData = {
      ...appointment,
      createdAt: new Date(),
      status: appointment.status || 'new'
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.APPOINTMENTS), appointmentData);
    console.log('Appointment saved with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving appointment:', error);
    return null;
  }
};

/**
 * Fetch all chat logs (for admin panel)
 * @param limitCount - Number of chats to fetch
 */
export const fetchChatLogs = async (limitCount: number = 100): Promise<ChatLog[]> => {
  try {
    const q = query(
      collection(db, COLLECTIONS.CHATS),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const chats: ChatLog[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      chats.push({
        id: doc.id,
        userMessage: data.userMessage,
        aiMessage: data.aiMessage,
        hospitalId: data.hospitalId,
        createdAt: data.createdAt?.toDate() || new Date()
      });
    });

    return chats;
  } catch (error) {
    console.error('Error fetching chat logs:', error);
    return [];
  }
};

/**
 * Fetch all appointments (for admin panel)
 * @param limitCount - Number of appointments to fetch
 * @param statusFilter - Optional status filter
 */
export const fetchAppointments = async (
  limitCount: number = 100,
  statusFilter?: 'new' | 'pending' | 'completed'
): Promise<Appointment[]> => {
  try {
    let q;

    if (statusFilter) {
      q = query(
        collection(db, COLLECTIONS.APPOINTMENTS),
        where('status', '==', statusFilter),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
    } else {
      q = query(
        collection(db, COLLECTIONS.APPOINTMENTS),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
    }

    const querySnapshot = await getDocs(q);
    const appointments: Appointment[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      appointments.push({
        id: doc.id,
        name: data.name,
        phoneOrEmail: data.phoneOrEmail,
        department: data.department,
        preferredTime: data.preferredTime,
        reason: data.reason,
        status: data.status,
        hospitalId: data.hospitalId,
        createdAt: data.createdAt?.toDate() || new Date()
      });
    });

    return appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

/**
 * Get appointment statistics (for admin dashboard)
 */
export const getAppointmentStats = async (): Promise<{
  total: number;
  new: number;
  pending: number;
  completed: number;
}> => {
  try {
    const allAppointments = await fetchAppointments(1000);

    return {
      total: allAppointments.length,
      new: allAppointments.filter(a => a.status === 'new').length,
      pending: allAppointments.filter(a => a.status === 'pending').length,
      completed: allAppointments.filter(a => a.status === 'completed').length
    };
  } catch (error) {
    console.error('Error getting appointment stats:', error);
    return { total: 0, new: 0, pending: 0, completed: 0 };
  }
};
