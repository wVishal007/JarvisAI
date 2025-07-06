// src/hooks/useFetchChatHistory.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, clearMessages } from '../src/redux/chatSlice';
import { AppDispatch } from '../src/redux/store';

const useFetchChatHistory = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('token'); // ✅ move inside useEffect
    if (!token) return; // ❗️ skip guest users

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_MAIN_API}/api/v1/chat/history`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const data = await res.json();
        if (!data.success) throw new Error(data.error || 'Could not fetch chat history');

        dispatch(clearMessages()); // ✅ clear previous session

        data.history.forEach((msg: any, index: number) => {
          dispatch(
            addMessage({
              id: `${Date.now()}-${index}`, // stable & unique
              type: msg.role,
              content: msg.content,
              timestamp: msg.timestamp,
            })
          );
        });
      } catch (err) {
        console.error('❌ Error fetching chat history:', err);
      }
    };

    fetchHistory();
  }, [dispatch]); // ✅ token removed from dependency array
};

export default useFetchChatHistory;
