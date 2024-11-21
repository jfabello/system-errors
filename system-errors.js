/**
 * @module jfabello/system-errors
 * @description Custom system error classes for Node.js that map to POSIX system errors. Based on the file https://github.com/nodejs/node/blob/main/doc/api/os.md.
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
const commonErrors = require("@jfabello/common-errors");

const SystemErrorsMap = new Map();

// Maps to E2BIG
class ERROR_ARGUMENT_LIST_TOO_LONG extends Error {
	constructor() {
		super(`The list of arguments is longer than expected.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("E2BIG", ERROR_ARGUMENT_LIST_TOO_LONG);

// Maps to EACCES
class ERROR_NO_ACCESS extends Error {
	constructor() {
		super(`The operation does not have enough permissions.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EACCES", ERROR_NO_ACCESS);

// Maps to EADDRINUSE
class ERROR_ADDRESS_IN_USE extends Error {
	constructor() {
		super(`The network address is already in use.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EADDRINUSE", ERROR_ADDRESS_IN_USE);

// Maps to EADDRNOTAVAIL
class ERROR_ADDRESS_NOT_AVAILABLE extends Error {
	constructor() {
		super(`The network address is currently unavailable for use.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EADDRNOTAVAIL", ERROR_ADDRESS_NOT_AVAILABLE);

// Maps to EAFNOSUPPORT
class ERROR_ADDRESS_FAMILY_NOT_SUPPORTED extends Error {
	constructor() {
		super(`The network address family is not supported.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EAFNOSUPPORT", ERROR_ADDRESS_FAMILY_NOT_SUPPORTED);

// Maps to EAGAIN
class ERROR_NO_DATA_TRY_AGAIN_LATER extends Error {
	constructor() {
		super(`There is no data available. Try again later.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EAGAIN", ERROR_NO_DATA_TRY_AGAIN_LATER);

// Maps to EALREADY
class ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS extends Error {
	constructor() {
		super(`The socket already has a pending connection in progress.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EALREADY", ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS);

// Maps to EBADF
class ERROR_FILE_DESCRIPTOR_NOT_VALID extends Error {
	constructor() {
		super(`File descriptor is not valid.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EBADF", ERROR_FILE_DESCRIPTOR_NOT_VALID);

// Maps to EBADMSG
class ERROR_INVALID_DATA_MESSAGE extends Error {
	constructor() {
		super(`Invalid data message.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EBADMSG", ERROR_INVALID_DATA_MESSAGE);

// Maps to EBUSY
class ERROR_DEVICE_OR_RESOURCE_BUSY extends Error {
	constructor() {
		super(`Device or resource is busy.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EBUSY", ERROR_DEVICE_OR_RESOURCE_BUSY);

// Maps to ECANCELED
class ERROR_OPERATION_CANCELLED extends Error {
	constructor() {
		super(`The operation was canceled.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ECANCELED", ERROR_OPERATION_CANCELLED);

// Maps to ECHILD
class ERROR_NO_CHILD_PROCESSES extends Error {
	constructor() {
		super(`There are no child processes.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ECHILD", ERROR_NO_CHILD_PROCESSES);

// Maps to ECONNABORTED
class ERROR_NETWORK_CONNECTION_ABORTED extends Error {
	constructor() {
		super(`The network connection has been aborted.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ECONNABORTED", ERROR_NETWORK_CONNECTION_ABORTED);

// Maps to ECONNREFUSED
class ERROR_NETWORK_CONNECTION_REFUSED extends Error {
	constructor() {
		super(`The network connection has been refused.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ECONNREFUSED", ERROR_NETWORK_CONNECTION_REFUSED);

// Maps to ECONNRESET
class ERROR_NETWORK_CONNECTION_RESET extends Error {
	constructor() {
		super(`The network connection has been reset.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ECONNRESET", ERROR_NETWORK_CONNECTION_RESET);

// Maps to EDEADLK
class ERROR_RESOURCE_DEADLOCK_AVOIDED extends Error {
	constructor() {
		super(`A resource deadlock has been avoided.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EDEADLK", ERROR_RESOURCE_DEADLOCK_AVOIDED);

// Maps to EDESTADDRREQ
class ERROR_DESTINATION_ADDRESS_REQUIRED extends Error {
	constructor() {
		super(`A destination address is required.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EDESTADDRREQ", ERROR_DESTINATION_ADDRESS_REQUIRED);

// Maps to EDOM
class ERROR_ARGUMENT_OUT_OF_DOMAIN extends Error {
	constructor() {
		super(`An argument is out of the domain of the function.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EDOM", ERROR_ARGUMENT_OUT_OF_DOMAIN);

// Maps to EDQUOT
class ERROR_DISK_QUOTA_EXCEEDED extends Error {
	constructor() {
		super(`The disk quota has been exceeded.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EDQUOT", ERROR_DISK_QUOTA_EXCEEDED);

// Maps to EEXIST
class ERROR_FILE_EXISTS extends Error {
	constructor() {
		super(`The file already exists.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EEXIST", ERROR_FILE_EXISTS);

// Maps to EFAULT
class ERROR_INVALID_POINTER_ADDRESS extends Error {
	constructor() {
		super(`Invalid pointer address.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EFAULT", ERROR_INVALID_POINTER_ADDRESS);

// Maps to EFBIG
class ERROR_FILE_TOO_LARGE extends Error {
	constructor() {
		super(`The file is too large.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EFBIG", ERROR_FILE_TOO_LARGE);

// Maps to EHOSTUNREACH
class ERROR_HOST_UNREACHABLE extends Error {
	constructor() {
		super(`The host is unreachable.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EHOSTUNREACH", ERROR_HOST_UNREACHABLE);

// Maps to EIDRM
class ERROR_IDENTIFIER_REMOVED extends Error {
	constructor() {
		super(`The identifier has been removed.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EIDRM", ERROR_IDENTIFIER_REMOVED);

// Maps to EILSEQ
class ERROR_ILLEGAL_BYTE_SEQUENCE extends Error {
	constructor() {
		super(`Illegal byte sequence.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EILSEQ", ERROR_ILLEGAL_BYTE_SEQUENCE);

// Maps to EINPROGRESS
class ERROR_OPERATION_ALREADY_IN_PROGRESS extends Error {
	constructor() {
		super(`An operation is already in progress.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EINPROGRESS", ERROR_OPERATION_ALREADY_IN_PROGRESS);

// Maps to EINTR
class ERROR_FUNCTION_CALL_INTERRUPTED extends Error {
	constructor() {
		super(`A function call was interrupted.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EINTR", ERROR_FUNCTION_CALL_INTERRUPTED);

// Maps to EINVAL
class ERROR_INVALID_ARGUMENT extends Error {
	constructor() {
		super(`An invalid argument was provided.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EINVAL", ERROR_INVALID_ARGUMENT);

// Maps to EIO
class ERROR_UNSPECIFIED_IO_ERROR extends Error {
	constructor() {
		super(`Unspecified I/O error.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EIO", ERROR_UNSPECIFIED_IO_ERROR);

// Maps to EISCONN
class ERROR_SOCKET_CONNECTED extends Error {
	constructor() {
		super(`The socket is connected.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EISCONN", ERROR_SOCKET_CONNECTED);

// Maps to EISDIR
class ERROR_PATH_IS_A_DIRECTORY extends Error {
	constructor() {
		super(`The path is a directory.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EISDIR", ERROR_PATH_IS_A_DIRECTORY);

// Maps to ELOOP
class ERROR_TOO_MANY_SYMLINKS_LEVELS extends Error {
	constructor() {
		super(`Too many levels of symbolic links in a path.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ELOOP", ERROR_TOO_MANY_SYMLINKS_LEVELS);

// Maps to EMFILE and ENFILE
class ERROR_TOO_MANY_OPEN_FILES extends Error {
	constructor() {
		super(`Too many open files.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EMFILE", ERROR_TOO_MANY_OPEN_FILES);
SystemErrorsMap.set("ENFILE", ERROR_TOO_MANY_OPEN_FILES);

// Maps to EMLINK
class ERROR_TOO_MANY_LINKS_TO_FILE extends Error {
	constructor() {
		super(`Too many hard links to the file.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EMLINK", ERROR_TOO_MANY_LINKS_TO_FILE);

// Maps to EMSGSIZE
class ERROR_MESSAGE_TOO_LONG extends Error {
	constructor() {
		super(`The provided message is too long.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EMSGSIZE", ERROR_MESSAGE_TOO_LONG);

// Maps to EMULTIHOP
class ERROR_MULTIHOP_ATTEMPTED extends Error {
	constructor() {
		super(`A multihop was attempted.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EMULTIHOP", ERROR_MULTIHOP_ATTEMPTED);

// Maps to ENAMETOOLONG
class ERROR_FILENAME_TOO_LONG extends Error {
	constructor() {
		super(`The filename is too long.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENAMETOOLONG", ERROR_FILENAME_TOO_LONG);

// Maps to ENETDOWN
class ERROR_NETWORK_IS_DOWN extends Error {
	constructor() {
		super(`The network is down.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENETDOWN", ERROR_NETWORK_IS_DOWN);

// Maps to ENETRESET
class ERROR_CONNECTION_ABORTED_BY_NETWORK extends Error {
	constructor() {
		super(`The connection has been aborted by the network.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENETRESET", ERROR_CONNECTION_ABORTED_BY_NETWORK);

// Maps to ENETUNREACH
class ERROR_NETWORK_UNREACHABLE extends Error {
	constructor() {
		super(`The network is unreachable.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENETUNREACH", ERROR_NETWORK_UNREACHABLE);

// Maps to ENOBUFS
class ERROR_NO_BUFFER_SPACE_AVAILABLE extends Error {
	constructor() {
		super(`No buffer space is available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOBUFS", ERROR_NO_BUFFER_SPACE_AVAILABLE);

// Maps to ENODATA
class ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM extends Error {
	constructor() {
		super(`No message available on the stream head read queue.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENODATA", ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM);

// Maps to ENODEV
class ERROR_NO_SUCH_DEVICE extends Error {
	constructor() {
		super(`There is no such device.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENODEV", ERROR_NO_SUCH_DEVICE);

// Maps to ENOENT
class ERROR_NO_SUCH_FILE_OR_DIRECTORY extends Error {
	constructor() {
		super(`No such file or directory.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOENT", ERROR_NO_SUCH_FILE_OR_DIRECTORY);

// Maps to ENOEXEC
class ERROR_EXEC_FORMAT extends Error {
	constructor() {
		super(`Exec format error.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOEXEC", ERROR_EXEC_FORMAT);

// Maps to ENOLCK
class ERROR_NO_LOCKS_AVAILABLE extends Error {
	constructor() {
		super(`No locks available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOLCK", ERROR_NO_LOCKS_AVAILABLE);

// Maps to ENOLINK
class ERROR_LINK_SEVERED extends Error {
	constructor() {
		super(`A link has been severed.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOLINK", ERROR_LINK_SEVERED);

// Maps to ENOMEM
class ERROR_NOT_ENOUGH_SPACE extends Error {
	constructor() {
		super(`Not enough space.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOMEM", ERROR_NOT_ENOUGH_SPACE);

// Maps to ENOMSG
class ERROR_NO_MESSAGE_OF_DESIRED_TYPE extends Error {
	constructor() {
		super(`No message of the desired type.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOMSG", ERROR_NO_MESSAGE_OF_DESIRED_TYPE);

// Maps to ENOPROTOOPT
class ERROR_PROTOCOL_NOT_AVAILABLE extends Error {
	constructor() {
		super(`A given protocol is not available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOPROTOOPT", ERROR_PROTOCOL_NOT_AVAILABLE);

// Maps to ENOSPC
class ERROR_NO_SPACE_ON_DEVICE extends Error {
	constructor() {
		super(`No space available on the device.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOSPC", ERROR_NO_SPACE_ON_DEVICE);

// Maps to ENOSR
class ERROR_NO_STREAM_RESOURCES_AVAILABLE extends Error {
	constructor() {
		super(`No stream resources available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOSR", ERROR_NO_STREAM_RESOURCES_AVAILABLE);

// Maps to ENOSTR
class ERROR_RESOURCE_NOT_A_STREAM extends Error {
	constructor() {
		super(`The resource is not a stream.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOSTR", ERROR_RESOURCE_NOT_A_STREAM);

// Maps to ENOSYS
class ERROR_FUNCTION_NOT_IMPLEMENTED extends Error {
	constructor() {
		super(`Function has not been implemented.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOSYS", ERROR_FUNCTION_NOT_IMPLEMENTED);

// Maps to ENOTCONN
class ERROR_SOCKET_NOT_CONNECTED extends Error {
	constructor() {
		super(`The socket is not connected.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTCONN", ERROR_SOCKET_NOT_CONNECTED);

// Maps to ENOTDIR
class ERROR_NOT_A_DIRECTORY extends Error {
	constructor() {
		super(`The path is not a directory.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTDIR", ERROR_NOT_A_DIRECTORY);

// Maps to ENOTEMPTY
class ERROR_DIRECTORY_NOT_EMPTY extends Error {
	constructor() {
		super(`The directory is not empty.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTEMPTY", ERROR_DIRECTORY_NOT_EMPTY);

// Maps to ENOTFOUND
class ERROR_HOSTNAME_NOT_FOUND extends Error {
	constructor() {
		super(`The host name was not found.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTFOUND", ERROR_HOSTNAME_NOT_FOUND);

// Maps to ENOTSOCK
class ERROR_NOT_A_SOCKET extends Error {
	constructor() {
		super(`The given item is not a socket.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTSOCK", ERROR_NOT_A_SOCKET);

// Maps to ENOTSUP
class ERROR_OPERATION_NOT_SUPPORTED extends Error {
	constructor() {
		super(`A given operation is not supported.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTSUP", ERROR_OPERATION_NOT_SUPPORTED);

// Maps to ENOTTY
class ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION extends Error {
	constructor() {
		super(`Inappropriate I/O control operation.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOTTY", ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION);

// Maps to ENXIO
class ERROR_NO_SUCH_DEVICE_OR_ADDRESS extends Error {
	constructor() {
		super(`No such device or address.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENXIO", ERROR_NO_SUCH_DEVICE_OR_ADDRESS);

// Maps to EOPNOTSUPP
class ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET extends Error {
	constructor() {
		super(`An operation is not supported on the socket.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EOPNOTSUPP", ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET);

// Maps to EOVERFLOW
class ERROR_VALUE_TOO_LARGE extends Error {
	constructor() {
		super(`Value too large to be stored in data type.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EOVERFLOW", ERROR_VALUE_TOO_LARGE);

// Maps to EPERM
class ERROR_OPERATION_NOT_PERMITTED extends Error {
	constructor() {
		super(`The operation is not permitted.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EPERM", ERROR_OPERATION_NOT_PERMITTED);

// Maps to EPIPE
class ERROR_BROKEN_PIPE extends Error {
	constructor() {
		super(`Broken pipe.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EPIPE", ERROR_BROKEN_PIPE);

// Maps to EPROTO
class ERROR_PROTOCOL_ERROR extends Error {
	constructor() {
		super(`Protocol error.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EPROTO", ERROR_PROTOCOL_ERROR);

// Maps to EPROTONOSUPPORT
class ERROR_PROTOCOL_NOT_SUPPORTED extends Error {
	constructor() {
		super(`Protocol is not supported.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EPROTONOSUPPORT", ERROR_PROTOCOL_NOT_SUPPORTED);

// Maps to EPROTOTYPE
class ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET extends Error {
	constructor() {
		super(`Wrong type of protocol for a socket.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EPROTOTYPE", ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET);

// Maps to ERANGE
class ERROR_RESULT_TOO_LARGE extends Error {
	constructor() {
		super(`Result is too large.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ERANGE", ERROR_RESULT_TOO_LARGE);

// Maps to EROFS
class ERROR_READ_ONLY_FILE_SYSTEM extends Error {
	constructor() {
		super(`The file system is read-only.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EROFS", ERROR_READ_ONLY_FILE_SYSTEM);

// Maps to ESPIPE
class ERROR_INVALID_SEEK_OPERATION extends Error {
	constructor() {
		super(`Invalid seek operation.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ESPIPE", ERROR_INVALID_SEEK_OPERATION);

// Maps to ESRCH
class ERROR_NO_SUCH_PROCESS extends Error {
	constructor() {
		super(`No such process.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ESRCH", ERROR_NO_SUCH_PROCESS);

// Maps to ESTALE
class ERROR_STALE_FILE_HANDLE extends Error {
	constructor() {
		super(`The file handle is stale.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ESTALE", ERROR_STALE_FILE_HANDLE);

// Maps to ETIME
class ERROR_TIMER_EXPIRED extends Error {
	constructor() {
		super(`The timer expired.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ETIME", ERROR_TIMER_EXPIRED);

// Maps to ETIMEDOUT
class ERROR_CONNECTION_TIMEOUT extends Error {
	constructor() {
		super(`The connection timed out.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ETIMEDOUT", ERROR_CONNECTION_TIMEOUT);

// Maps to ETXTBSY
class ERROR_TEXT_FILE_BUSY extends Error {
	constructor() {
		super(`Text file is busy.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ETXTBSY", ERROR_TEXT_FILE_BUSY);

// Maps to EWOULDBLOCK
class ERROR_OPERATION_WOULD_BLOCK extends Error {
	constructor() {
		super(`The operation would block.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EWOULDBLOCK", ERROR_OPERATION_WOULD_BLOCK);

// Maps to EXDEV
class ERROR_IMPROPER_LINK extends Error {
	constructor() {
		super(`Improper link.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EXDEV", ERROR_IMPROPER_LINK);

/**
 * @function createErrorFromSystemErrorCode
 * @description Creates an error from a system error code.
 * @param {string} systemErrorCode The system error code.
 * @returns {Error} An error object.
 */

function createErrorFromSystemErrorCode(systemErrorCode) {
	if (SystemErrorsMap.has(systemErrorCode) === true) {
		let errorClass = SystemErrorsMap.get(systemErrorCode);
		return new errorClass();
	} else {
		return new commonErrors.ERROR_UNKNOWN();
	}
}

// Builds the errors object to be exported

const errors = {};

for (const [key, value] of SystemErrorsMap) {
	errors[value.name] = value;
}

errors.createErrorFromSystemErrorCode = createErrorFromSystemErrorCode;

Object.freeze(errors);

module.exports = errors;
