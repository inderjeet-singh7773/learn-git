import { io } from 'socket.io-client';
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';
const socket = io(SOCKET_URL, { transports: ['websocket'] });
export function joinBookingRoom(bookingId) { socket.emit('join-booking', { bookingId }); }
export function onDriverLocation(cb) { socket.on('driver-location', cb); }
export function onBookingUpdated(cb) { socket.on('booking-updated', cb); }
export function emitDriverLocation(bookingId, location) { socket.emit('driver-location', { bookingId, location }); }
export default socket;
