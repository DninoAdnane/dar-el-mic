// /* eslint-disable no-bitwise */
// import { EventEmitter } from 'events';

// const createUUID = () => {
//   const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
//   return pattern.replace(/[xy]/g, (c) => {
//     const r = (Math.random() * 16) | 0;
//     const v = c === 'x' ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// };

// const Constants = {
//   CHANGE: 'change',
//   PRIMARY: 'primary',
//   SECONDARY: 'secondary',
//   INFO: 'info',
//   SUCCESS: 'success',
//   WARNING: 'warning',
//   ERROR: 'error',
// };

// class NotificationManager extends EventEmitter {
//   constructor() {
//     super();
//     this.listNotify = [];
//   }

//   create(notify) {
//     const defaultNotify = {
//       id: createUUID(),
//       type: 'info',
//       title: null,
//       message: null,
//       timeOut: 5000,
//       customClassName: '',
//     };
//     if (notify.priority) {
//       this.listNotify.unshift(Object.assign(defaultNotify, notify));
//     } else {
//       this.listNotify.push(Object.assign(defaultNotify, notify));
//     }
//     this.emitChange();
//   }

//   primary(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.PRIMARY,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   secondary(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.SECONDARY,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   info(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.INFO,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   success(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.SUCCESS,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   warning(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.WARNING,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   error(message, title, timeOut, onClick, priority, customClassName) {
//     this.create({
//       type: Constants.ERROR,
//       message,
//       title,
//       timeOut,
//       onClick,
//       priority,
//       customClassName,
//     });
//   }

//   remove(notification) {
//     this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
//     this.emitChange();
//   }

//   emitChange() {
//     this.emit(Constants.CHANGE, this.listNotify);
//   }

//   addChangeListener(callback) {
//     this.addListener(Constants.CHANGE, callback);
//   }

//   removeChangeListener(callback) {
//     this.removeListener(Constants.CHANGE, callback);
//   }
// }

// export default new NotificationManager();
