/**
 * @module jfabello/systemerrors
 * @description Error classes that map to Node.js system errors. Based on the file https://github.com/nodejs/node/blob/main/doc/api/os.md.
 * @license GPL-3.0-only
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
const commonErrors = require("@jfabello/commonerrors");

const SystemErrorsMap = new Map();

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
		super(`The network address is not available for use.`);
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

// Maps to EALREADY
class ERROR_SOCKET_CONNECTION_IN_PROGRESS extends Error {
	constructor() {
		super(`The socket already has a pending connection in progress.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EALREADY", ERROR_SOCKET_CONNECTION_IN_PROGRESS);

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

// Maps to EDESTADDRREQ
class ERROR_DESTINATION_ADDRESS_REQUIRED extends Error {
	constructor() {
		super(`A destination address is required.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EDESTADDRREQ", ERROR_DESTINATION_ADDRESS_REQUIRED);

// Maps to EHOSTUNREACH
class ERROR_HOST_UNREACHABLE extends Error {
	constructor() {
		super(`The host is unreachable.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("EHOSTUNREACH", ERROR_HOST_UNREACHABLE);

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

// Maps to ENODEV
class ERROR_NO_SUCH_DEVICE extends Error {
	constructor() {
		super(`There is no such device.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENODEV", ERROR_NO_SUCH_DEVICE);

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

// Maps to ENOPROTOOPT
class ERROR_PROTOCOL_NOT_AVAILABLE extends Error {
	constructor() {
		super(`A given protocol is not available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOPROTOOPT", ERROR_PROTOCOL_NOT_AVAILABLE);

// Maps to ENOSR
class ERROR_NO_STREAM_RESOURCES_AVAILABLE extends Error {
	constructor() {
		super(`No stream resources available.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ENOSR", ERROR_NO_STREAM_RESOURCES_AVAILABLE);

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

// Maps to ETIMEDOUT
class ERROR_CONNECTION_TIMEOUT extends Error {
	constructor() {
		super(`The connection timed out.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap.set("ETIMEDOUT", ERROR_CONNECTION_TIMEOUT);

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
