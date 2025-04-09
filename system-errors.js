/**
 * Custom system error classes for Node.js that map to POSIX system errors. Based on the file https://github.com/nodejs/node/blob/main/doc/api/os.md.
 * @module jfabello/system-errors
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

const SystemErrorsMap = {};

/**
 * Thrown when the list of arguments is longer than expected. Maps to E2BIG.
 * @class ERROR_ARGUMENT_LIST_TOO_LONG
 * @extends Error
 */
class ERROR_ARGUMENT_LIST_TOO_LONG extends Error {
	constructor() {
		super("The list of arguments is longer than expected.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["E2BIG"] = ERROR_ARGUMENT_LIST_TOO_LONG;

/**
 * Thrown when the operation does not have enough permissions. Maps to EACCES.
 * @class ERROR_NO_ACCESS
 * @extends Error
 */
class ERROR_NO_ACCESS extends Error {
	constructor() {
		super("The operation does not have enough permissions.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EACCES"] = ERROR_NO_ACCESS;

/**
 * Thrown when the network address is already in use. Maps to EADDRINUSE.
 * @class ERROR_ADDRESS_IN_USE
 * @extends Error
 */
class ERROR_ADDRESS_IN_USE extends Error {
	constructor() {
		super("The network address is already in use.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EADDRINUSE"] = ERROR_ADDRESS_IN_USE;

/**
 * Thrown when the network address is currently unavailable for use. Maps to EADDRNOTAVAIL.
 * @class ERROR_ADDRESS_NOT_AVAILABLE
 * @extends Error
 */
class ERROR_ADDRESS_NOT_AVAILABLE extends Error {
	constructor() {
		super("The network address is currently unavailable for use.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EADDRNOTAVAIL"] = ERROR_ADDRESS_NOT_AVAILABLE;

/**
 * Thrown when the network address family is not supported. Maps to EAFNOSUPPORT.
 * @class ERROR_ADDRESS_FAMILY_NOT_SUPPORTED
 * @extends Error
 */
class ERROR_ADDRESS_FAMILY_NOT_SUPPORTED extends Error {
	constructor() {
		super("The network address family is not supported.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EAFNOSUPPORT"] = ERROR_ADDRESS_FAMILY_NOT_SUPPORTED;

/**
 * Thrown when there is no data available. Try again later. Maps to EAGAIN.
 * @class ERROR_NO_DATA_TRY_AGAIN_LATER
 * @extends Error
 */
class ERROR_NO_DATA_TRY_AGAIN_LATER extends Error {
	constructor() {
		super("There is no data available. Try again later.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EAGAIN"] = ERROR_NO_DATA_TRY_AGAIN_LATER;

/**
 * Thrown when the socket already has a pending connection in progress. Maps to EALREADY.
 * @class ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS
 * @extends Error
 */
class ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS extends Error {
	constructor() {
		super("The socket already has a pending connection in progress.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EALREADY"] = ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS;

/**
 * Thrown when the file descriptor is not valid. Maps to EBADF.
 * @class ERROR_FILE_DESCRIPTOR_NOT_VALID
 * @extends Error
 */
class ERROR_FILE_DESCRIPTOR_NOT_VALID extends Error {
	constructor() {
		super("File descriptor is not valid.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EBADF"] = ERROR_FILE_DESCRIPTOR_NOT_VALID;

/**
 * Thrown when the data message is not valid. Maps to EBADMSG.
 * @class ERROR_INVALID_DATA_MESSAGE
 * @extends Error
 */
class ERROR_INVALID_DATA_MESSAGE extends Error {
	constructor() {
		super("Invalid data message.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EBADMSG"] = ERROR_INVALID_DATA_MESSAGE;

/**
 * Thrown when the device or resource is busy. Maps to EBUSY.
 * @class ERROR_DEVICE_OR_RESOURCE_BUSY
 * @extends Error
 */
class ERROR_DEVICE_OR_RESOURCE_BUSY extends Error {
	constructor() {
		super("Device or resource is busy.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EBUSY"] = ERROR_DEVICE_OR_RESOURCE_BUSY;

/**
 * Thrown when the operation was canceled. Maps to ECANCELED.
 * @class ERROR_OPERATION_CANCELLED
 * @extends Error
 */
class ERROR_OPERATION_CANCELLED extends Error {
	constructor() {
		super("The operation was canceled.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ECANCELED"] = ERROR_OPERATION_CANCELLED;

/**
 * Thrown when there are no child processes. Maps to ECHILD.
 * @class ERROR_NO_CHILD_PROCESSES
 * @extends Error
 */
class ERROR_NO_CHILD_PROCESSES extends Error {
	constructor() {
		super("There are no child processes.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ECHILD"] = ERROR_NO_CHILD_PROCESSES;

/**
 * Thrown when the network connection has been aborted. Maps to ECONNABORTED.
 * @class ERROR_NETWORK_CONNECTION_ABORTED
 * @extends Error
 */
class ERROR_NETWORK_CONNECTION_ABORTED extends Error {
	constructor() {
		super("The network connection has been aborted.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ECONNABORTED"] = ERROR_NETWORK_CONNECTION_ABORTED;

/**
 * Thrown when the network connection has been refused. Maps to ECONNREFUSED.
 * @class ERROR_NETWORK_CONNECTION_REFUSED
 * @extends Error
 */
class ERROR_NETWORK_CONNECTION_REFUSED extends Error {
	constructor() {
		super("The network connection has been refused.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ECONNREFUSED"] = ERROR_NETWORK_CONNECTION_REFUSED;

/**
 * Thrown when the network connection has been reset. Maps to ECONNRESET.
 * @class ERROR_NETWORK_CONNECTION_RESET
 * @extends Error
 */
class ERROR_NETWORK_CONNECTION_RESET extends Error {
	constructor() {
		super("The network connection has been reset.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ECONNRESET"] = ERROR_NETWORK_CONNECTION_RESET;

/**
 * Thrown when a resource deadlock has been avoided. Maps to EDEADLK.
 * @class ERROR_RESOURCE_DEADLOCK_AVOIDED
 * @extends Error
 */
class ERROR_RESOURCE_DEADLOCK_AVOIDED extends Error {
	constructor() {
		super("A resource deadlock has been avoided.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EDEADLK"] = ERROR_RESOURCE_DEADLOCK_AVOIDED;

/**
 * Thrown when a destination address is required. Maps to EDESTADDRREQ.
 * @class ERROR_DESTINATION_ADDRESS_REQUIRED
 * @extends Error
 */
class ERROR_DESTINATION_ADDRESS_REQUIRED extends Error {
	constructor() {
		super("A destination address is required.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EDESTADDRREQ"] = ERROR_DESTINATION_ADDRESS_REQUIRED;

/**
 * Thrown when an argument is out of the domain of the function. Maps to EDOM.
 * @class ERROR_ARGUMENT_OUT_OF_DOMAIN
 * @extends Error
 */
class ERROR_ARGUMENT_OUT_OF_DOMAIN extends Error {
	constructor() {
		super("An argument is out of the domain of the function.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EDOM"] = ERROR_ARGUMENT_OUT_OF_DOMAIN;

/**
 * Thrown when the disk quota has been exceeded. Maps to EDQUOT.
 * @class ERROR_DISK_QUOTA_EXCEEDED
 * @extends Error
 */
class ERROR_DISK_QUOTA_EXCEEDED extends Error {
	constructor() {
		super("The disk quota has been exceeded.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EDQUOT"] = ERROR_DISK_QUOTA_EXCEEDED;

/**
 * Thrown when the file already exists. Maps to EEXIST.
 * @class ERROR_FILE_EXISTS
 * @extends Error
 */
class ERROR_FILE_EXISTS extends Error {
	constructor() {
		super("The file already exists.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EEXIST"] = ERROR_FILE_EXISTS;

/**
 * Thrown when an invalid pointer address is encountered. Maps to EFAULT.
 * @class ERROR_INVALID_POINTER_ADDRESS
 * @extends Error
 */
class ERROR_INVALID_POINTER_ADDRESS extends Error {
	constructor() {
		super("Invalid pointer address.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EFAULT"] = ERROR_INVALID_POINTER_ADDRESS;

/**
 * Thrown when the file is too large. Maps to EFBIG.
 * @class ERROR_FILE_TOO_LARGE
 * @extends Error
 */
class ERROR_FILE_TOO_LARGE extends Error {
	constructor() {
		super("The file is too large.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EFBIG"] = ERROR_FILE_TOO_LARGE;

/**
 * Thrown when the host is unreachable. Maps to EHOSTUNREACH.
 * @class ERROR_HOST_UNREACHABLE
 * @extends Error
 */
class ERROR_HOST_UNREACHABLE extends Error {
	constructor() {
		super("The host is unreachable.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EHOSTUNREACH"] = ERROR_HOST_UNREACHABLE;

/**
 * Thrown when the identifier has been removed. Maps to EIDRM.
 * @class ERROR_IDENTIFIER_REMOVED
 * @extends Error
 */
class ERROR_IDENTIFIER_REMOVED extends Error {
	constructor() {
		super("The identifier has been removed.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EIDRM"] = ERROR_IDENTIFIER_REMOVED;

/**
 * Thrown when an illegal byte sequence is encountered. Maps to EILSEQ.
 * @class ERROR_ILLEGAL_BYTE_SEQUENCE
 * @extends Error
 */
class ERROR_ILLEGAL_BYTE_SEQUENCE extends Error {
	constructor() {
		super("Illegal byte sequence.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EILSEQ"] = ERROR_ILLEGAL_BYTE_SEQUENCE;

/**
 * Thrown when an operation is already in progress. Maps to EINPROGRESS.
 * @class ERROR_OPERATION_ALREADY_IN_PROGRESS
 * @extends Error
 */
class ERROR_OPERATION_ALREADY_IN_PROGRESS extends Error {
	constructor() {
		super("An operation is already in progress.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EINPROGRESS"] = ERROR_OPERATION_ALREADY_IN_PROGRESS;

/**
 * Thrown when a function call was interrupted. Maps to EINTR.
 * @class ERROR_FUNCTION_CALL_INTERRUPTED
 * @extends Error
 */
class ERROR_FUNCTION_CALL_INTERRUPTED extends Error {
	constructor() {
		super("A function call was interrupted.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EINTR"] = ERROR_FUNCTION_CALL_INTERRUPTED;

/**
 * Thrown when an invalid argument was provided. Maps to EINVAL.
 * @class ERROR_INVALID_ARGUMENT
 * @extends Error
 */
class ERROR_INVALID_ARGUMENT extends Error {
	constructor() {
		super("An invalid argument was provided.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EINVAL"] = ERROR_INVALID_ARGUMENT;

/**
 * Thrown when an unspecified I/O error occurs. Maps to EIO.
 * @class ERROR_UNSPECIFIED_IO_ERROR
 * @extends Error
 */
class ERROR_UNSPECIFIED_IO_ERROR extends Error {
	constructor() {
		super("Unspecified I/O error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EIO"] = ERROR_UNSPECIFIED_IO_ERROR;

/**
 * Thrown when the socket is connected. Maps to EISCONN.
 * @class ERROR_SOCKET_CONNECTED
 * @extends Error
 */
class ERROR_SOCKET_CONNECTED extends Error {
	constructor() {
		super("The socket is connected.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EISCONN"] = ERROR_SOCKET_CONNECTED;

/**
 * Thrown when the path is a directory. Maps to EISDIR.
 * @class ERROR_PATH_IS_A_DIRECTORY
 * @extends Error
 */
class ERROR_PATH_IS_A_DIRECTORY extends Error {
	constructor() {
		super("The path is a directory.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EISDIR"] = ERROR_PATH_IS_A_DIRECTORY;

/**
 * Thrown when there are too many levels of symbolic links in a path. Maps to ELOOP.
 * @class ERROR_TOO_MANY_SYMLINKS_LEVELS
 * @extends Error
 */
class ERROR_TOO_MANY_SYMLINKS_LEVELS extends Error {
	constructor() {
		super("Too many levels of symbolic links in a path.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ELOOP"] = ERROR_TOO_MANY_SYMLINKS_LEVELS;

/**
 * Thrown when too many files are open. Maps to EMFILE. and ENFILE
 * @class ERROR_TOO_MANY_OPEN_FILES
 * @extends Error
 */
class ERROR_TOO_MANY_OPEN_FILES extends Error {
	constructor() {
		super("Too many open files.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EMFILE"] = ERROR_TOO_MANY_OPEN_FILES;
SystemErrorsMap["ENFILE"] = ERROR_TOO_MANY_OPEN_FILES;

/**
 * Thrown when too many hard links to the file. Maps to EMLINK.
 * @class ERROR_TOO_MANY_LINKS_TO_FILE
 * @extends Error
 */
class ERROR_TOO_MANY_LINKS_TO_FILE extends Error {
	constructor() {
		super("Too many hard links to the file.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EMLINK"] = ERROR_TOO_MANY_LINKS_TO_FILE;

/**
 * Thrown when the provided message is too long. Maps to EMSGSIZE.
 * @class ERROR_MESSAGE_TOO_LONG
 * @extends Error
 */
class ERROR_MESSAGE_TOO_LONG extends Error {
	constructor() {
		super("The provided message is too long.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EMSGSIZE"] = ERROR_MESSAGE_TOO_LONG;

/**
 * Thrown when a multihop was attempted. Maps to EMULTIHOP.
 * @class ERROR_MULTIHOP_ATTEMPTED
 * @extends Error
 */
class ERROR_MULTIHOP_ATTEMPTED extends Error {
	constructor() {
		super("A multihop was attempted.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EMULTIHOP"] = ERROR_MULTIHOP_ATTEMPTED;

/**
 * Thrown when the filename is too long. Maps to ENAMETOOLONG.
 * @class ERROR_FILENAME_TOO_LONG
 * @extends Error
 */
class ERROR_FILENAME_TOO_LONG extends Error {
	constructor() {
		super("The filename is too long.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENAMETOOLONG"] = ERROR_FILENAME_TOO_LONG;

/**
 * Thrown when the network is down. Maps to ENETDOWN.
 * @class ERROR_NETWORK_IS_DOWN
 * @extends Error
 */
class ERROR_NETWORK_IS_DOWN extends Error {
	constructor() {
		super("The network is down.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENETDOWN"] = ERROR_NETWORK_IS_DOWN;

/**
 * Thrown when the connection has been aborted by the network. Maps to ENETRESET.
 * @class ERROR_CONNECTION_ABORTED_BY_NETWORK
 * @extends Error
 */
class ERROR_CONNECTION_ABORTED_BY_NETWORK extends Error {
	constructor() {
		super("The connection has been aborted by the network.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENETRESET"] = ERROR_CONNECTION_ABORTED_BY_NETWORK;

/**
 * Thrown when the network is unreachable. Maps to ENETUNREACH.
 * @class ERROR_NETWORK_UNREACHABLE
 * @extends Error
 */
class ERROR_NETWORK_UNREACHABLE extends Error {
	constructor() {
		super("The network is unreachable.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENETUNREACH"] = ERROR_NETWORK_UNREACHABLE;

/**
 * Thrown when no buffer space is available. Maps to ENOBUFS.
 * @class ERROR_NO_BUFFER_SPACE_AVAILABLE
 * @extends Error
 */
class ERROR_NO_BUFFER_SPACE_AVAILABLE extends Error {
	constructor() {
		super("No buffer space is available.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOBUFS"] = ERROR_NO_BUFFER_SPACE_AVAILABLE;

/**
 * Thrown when no message is available on the stream head read queue. Maps to ENODATA.
 * @class ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM
 * @extends Error
 */
class ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM extends Error {
	constructor() {
		super("No message available on the stream head read queue.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENODATA"] = ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM;

/**
 * Thrown when there is no such device. Maps to ENODEV.
 * @class ERROR_NO_SUCH_DEVICE
 * @extends Error
 */
class ERROR_NO_SUCH_DEVICE extends Error {
	constructor() {
		super("There is no such device.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENODEV"] = ERROR_NO_SUCH_DEVICE;

/**
 * Thrown when no such file or directory exists. Maps to ENOENT.
 * @class ERROR_NO_SUCH_FILE_OR_DIRECTORY
 * @extends Error
 */
class ERROR_NO_SUCH_FILE_OR_DIRECTORY extends Error {
	constructor() {
		super("No such file or directory.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOENT"] = ERROR_NO_SUCH_FILE_OR_DIRECTORY;

/**
 * Thrown when an exec format error occurs. Maps to ENOEXEC.
 * @class ERROR_EXEC_FORMAT
 * @extends Error
 */
class ERROR_EXEC_FORMAT extends Error {
	constructor() {
		super("Exec format error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOEXEC"] = ERROR_EXEC_FORMAT;

/**
 * Thrown when no locks are available. Maps to ENOLCK.
 * @class ERROR_NO_LOCKS_AVAILABLE
 * @extends Error
 */
class ERROR_NO_LOCKS_AVAILABLE extends Error {
	constructor() {
		super("No locks available.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOLCK"] = ERROR_NO_LOCKS_AVAILABLE;

/**
 * Thrown when a link has been severed. Maps to ENOLINK.
 * @class ERROR_LINK_SEVERED
 * @extends Error
 */
class ERROR_LINK_SEVERED extends Error {
	constructor() {
		super("A link has been severed.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOLINK"] = ERROR_LINK_SEVERED;

/**
 * Thrown when there is not enough space. Maps to ENOMEM.
 * @class ERROR_NOT_ENOUGH_SPACE
 * @extends Error
 */
class ERROR_NOT_ENOUGH_SPACE extends Error {
	constructor() {
		super("Not enough space.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOMEM"] = ERROR_NOT_ENOUGH_SPACE;

/**
 * Thrown when no message of the desired type is available. Maps to ENOMSG.
 * @class ERROR_NO_MESSAGE_OF_DESIRED_TYPE
 * @extends Error
 */
class ERROR_NO_MESSAGE_OF_DESIRED_TYPE extends Error {
	constructor() {
		super("No message of the desired type.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOMSG"] = ERROR_NO_MESSAGE_OF_DESIRED_TYPE;

/**
 * Thrown when a given protocol is not available. Maps to ENOPROTOOPT.
 * @class ERROR_PROTOCOL_NOT_AVAILABLE
 * @extends Error
 */
class ERROR_PROTOCOL_NOT_AVAILABLE extends Error {
	constructor() {
		super("A given protocol is not available.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOPROTOOPT"] = ERROR_PROTOCOL_NOT_AVAILABLE;

/**
 * Thrown when no space is available on the device. Maps to ENOSPC.
 * @class ERROR_NO_SPACE_ON_DEVICE
 * @extends Error
 */
class ERROR_NO_SPACE_ON_DEVICE extends Error {
	constructor() {
		super("No space available on the device.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOSPC"] = ERROR_NO_SPACE_ON_DEVICE;

/**
 * Thrown when no stream resources are available. Maps to ENOSR.
 * @class ERROR_NO_STREAM_RESOURCES_AVAILABLE
 * @extends Error
 */
class ERROR_NO_STREAM_RESOURCES_AVAILABLE extends Error {
	constructor() {
		super("No stream resources available.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOSR"] = ERROR_NO_STREAM_RESOURCES_AVAILABLE;

/**
 * Thrown when the resource is not a stream. Maps to ENOSTR.
 * @class ERROR_RESOURCE_NOT_A_STREAM
 * @extends Error
 */
class ERROR_RESOURCE_NOT_A_STREAM extends Error {
	constructor() {
		super("The resource is not a stream.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOSTR"] = ERROR_RESOURCE_NOT_A_STREAM;

/**
 * Thrown when the function has not been implemented. Maps to ENOSYS.
 * @class ERROR_FUNCTION_NOT_IMPLEMENTED
 * @extends Error
 */
class ERROR_FUNCTION_NOT_IMPLEMENTED extends Error {
	constructor() {
		super("Function has not been implemented.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOSYS"] = ERROR_FUNCTION_NOT_IMPLEMENTED;

/**
 * Thrown when the socket is not connected. Maps to ENOTCONN.
 * @class ERROR_SOCKET_NOT_CONNECTED
 * @extends Error
 */
class ERROR_SOCKET_NOT_CONNECTED extends Error {
	constructor() {
		super("The socket is not connected.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTCONN"] = ERROR_SOCKET_NOT_CONNECTED;

/**
 * Thrown when the path is not a directory. Maps to ENOTDIR.
 * @class ERROR_NOT_A_DIRECTORY
 * @extends Error
 */
class ERROR_NOT_A_DIRECTORY extends Error {
	constructor() {
		super("The path is not a directory.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTDIR"] = ERROR_NOT_A_DIRECTORY;

/**
 * Thrown when the directory is not empty. Maps to ENOTEMPTY.
 * @class ERROR_DIRECTORY_NOT_EMPTY
 * @extends Error
 */
class ERROR_DIRECTORY_NOT_EMPTY extends Error {
	constructor() {
		super("The directory is not empty.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTEMPTY"] = ERROR_DIRECTORY_NOT_EMPTY;

/**
 * Thrown when the host name was not found. Maps to ENOTFOUND.
 * @class ERROR_HOSTNAME_NOT_FOUND
 * @extends Error
 */
class ERROR_HOSTNAME_NOT_FOUND extends Error {
	constructor() {
		super("The host name was not found.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTFOUND"] = ERROR_HOSTNAME_NOT_FOUND;

/**
 * Thrown when the given item is not a socket. Maps to ENOTSOCK.
 * @class ERROR_NOT_A_SOCKET
 * @extends Error
 */
class ERROR_NOT_A_SOCKET extends Error {
	constructor() {
		super("The given item is not a socket.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTSOCK"] = ERROR_NOT_A_SOCKET;

/**
 * Thrown when a given operation is not supported. Maps to ENOTSUP.
 * @class ERROR_OPERATION_NOT_SUPPORTED
 * @extends Error
 */
class ERROR_OPERATION_NOT_SUPPORTED extends Error {
	constructor() {
		super("A given operation is not supported.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTSUP"] = ERROR_OPERATION_NOT_SUPPORTED;

/**
 * Thrown when an inappropriate I/O control operation is attempted. Maps to ENOTTY.
 * @class ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION
 * @extends Error
 */
class ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION extends Error {
	constructor() {
		super("Inappropriate I/O control operation.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENOTTY"] = ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION;

/**
 * Thrown when no such device or address exists. Maps to ENXIO.
 * @class ERROR_NO_SUCH_DEVICE_OR_ADDRESS
 * @extends Error
 */
class ERROR_NO_SUCH_DEVICE_OR_ADDRESS extends Error {
	constructor() {
		super("No such device or address.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ENXIO"] = ERROR_NO_SUCH_DEVICE_OR_ADDRESS;

/**
 * Thrown when an operation is not supported on the socket. Maps to EOPNOTSUPP.
 * @class ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET
 * @extends Error
 */
class ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET extends Error {
	constructor() {
		super("An operation is not supported on the socket.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EOPNOTSUPP"] = ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET;

/**
 * Thrown when a value is too large to be stored in data type. Maps to EOVERFLOW.
 * @class ERROR_VALUE_TOO_LARGE
 * @extends Error
 */
class ERROR_VALUE_TOO_LARGE extends Error {
	constructor() {
		super("Value too large to be stored in data type.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EOVERFLOW"] = ERROR_VALUE_TOO_LARGE;

/**
 * Thrown when the operation is not permitted. Maps to EPERM.
 * @class ERROR_OPERATION_NOT_PERMITTED
 * @extends Error
 */
class ERROR_OPERATION_NOT_PERMITTED extends Error {
	constructor() {
		super("The operation is not permitted.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EPERM"] = ERROR_OPERATION_NOT_PERMITTED;

/**
 * Thrown when a broken pipe is encountered. Maps to EPIPE.
 * @class ERROR_BROKEN_PIPE
 * @extends Error
 */
class ERROR_BROKEN_PIPE extends Error {
	constructor() {
		super("Broken pipe.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EPIPE"] = ERROR_BROKEN_PIPE;

/**
 * Thrown when a protocol error occurs. Maps to EPROTO.
 * @class ERROR_PROTOCOL_ERROR
 * @extends Error
 */
class ERROR_PROTOCOL_ERROR extends Error {
	constructor() {
		super("Protocol error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EPROTO"] = ERROR_PROTOCOL_ERROR;

/**
 * Thrown when the protocol is not supported. Maps to EPROTONOSUPPORT.
 * @class ERROR_PROTOCOL_NOT_SUPPORTED
 * @extends Error
 */
class ERROR_PROTOCOL_NOT_SUPPORTED extends Error {
	constructor() {
		super("Protocol is not supported.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EPROTONOSUPPORT"] = ERROR_PROTOCOL_NOT_SUPPORTED;

/**
 * Thrown when the wrong type of protocol is used for a socket. Maps to EPROTOTYPE.
 * @class ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET
 * @extends Error
 */
class ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET extends Error {
	constructor() {
		super("Wrong type of protocol for a socket.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EPROTOTYPE"] = ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET;

/**
 * Thrown when the result is too large. Maps to ERANGE.
 * @class ERROR_RESULT_TOO_LARGE
 * @extends Error
 */
class ERROR_RESULT_TOO_LARGE extends Error {
	constructor() {
		super("Result is too large.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ERANGE"] = ERROR_RESULT_TOO_LARGE;

/**
 * Thrown when the file system is read-only. Maps to EROFS.
 * @class ERROR_READ_ONLY_FILE_SYSTEM
 * @extends Error
 */
class ERROR_READ_ONLY_FILE_SYSTEM extends Error {
	constructor() {
		super("The file system is read-only.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EROFS"] = ERROR_READ_ONLY_FILE_SYSTEM;

/**
 * Thrown when an invalid seek operation is attempted. Maps to ESPIPE.
 * @class ERROR_INVALID_SEEK_OPERATION
 * @extends Error
 */
class ERROR_INVALID_SEEK_OPERATION extends Error {
	constructor() {
		super("Invalid seek operation.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ESPIPE"] = ERROR_INVALID_SEEK_OPERATION;

/**
 * Thrown when no such process exists. Maps to ESRCH.
 * @class ERROR_NO_SUCH_PROCESS
 * @extends Error
 */
class ERROR_NO_SUCH_PROCESS extends Error {
	constructor() {
		super("No such process.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ESRCH"] = ERROR_NO_SUCH_PROCESS;

/**
 * Thrown when the file handle is stale. Maps to ESTALE.
 * @class ERROR_STALE_FILE_HANDLE
 * @extends Error
 */
class ERROR_STALE_FILE_HANDLE extends Error {
	constructor() {
		super("The file handle is stale.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ESTALE"] = ERROR_STALE_FILE_HANDLE;

/**
 * Thrown when the timer expires. Maps to ETIME.
 * @class ERROR_TIMER_EXPIRED
 * @extends Error
 */
class ERROR_TIMER_EXPIRED extends Error {
	constructor() {
		super("The timer expired.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ETIME"] = ERROR_TIMER_EXPIRED;

/**
 * Thrown when the connection times out. Maps to ETIMEDOUT.
 * @class ERROR_CONNECTION_TIMEOUT
 * @extends Error
 */
class ERROR_CONNECTION_TIMEOUT extends Error {
	constructor() {
		super("The connection timed out.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ETIMEDOUT"] = ERROR_CONNECTION_TIMEOUT;

/**
 * Thrown when a text file is busy. Maps to ETXTBSY.
 * @class ERROR_TEXT_FILE_BUSY
 * @extends Error
 */
class ERROR_TEXT_FILE_BUSY extends Error {
	constructor() {
		super("Text file is busy.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["ETXTBSY"] = ERROR_TEXT_FILE_BUSY;

/**
 * Thrown when the operation would block. Maps to EWOULDBLOCK.
 * @class ERROR_OPERATION_WOULD_BLOCK
 * @extends Error
 */
class ERROR_OPERATION_WOULD_BLOCK extends Error {
	constructor() {
		super("The operation would block.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EWOULDBLOCK"] = ERROR_OPERATION_WOULD_BLOCK;

/**
 * Thrown when an improper link is found. Maps to EXDEV.
 * @class ERROR_IMPROPER_LINK
 * @extends Error
 */
class ERROR_IMPROPER_LINK extends Error {
	constructor() {
		super("Improper link.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}
SystemErrorsMap["EXDEV"] = ERROR_IMPROPER_LINK;

/**
 * Thrown when an unknown error occurs.
 * @class ERROR_UNKNOWN
 * @extends Error
 */
class ERROR_UNKNOWN extends Error {
	constructor() {
		super("Unknown error.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * @function createErrorFromSystemErrorCode
 * @description Creates an error from a system error code.
 * @param {string} systemErrorCode The system error code.
 * @returns {Error} An error object.
 */

function createErrorFromSystemErrorCode(systemErrorCode) {
	if (SystemErrorsMap.hasOwnProperty(systemErrorCode) === true) {
		let errorClass = SystemErrorsMap[systemErrorCode];
		return new errorClass();
	} else {
		return new ERROR_UNKNOWN();
	}
}

// Builds the errors object to be exported

const errors = {
    ERROR_ARGUMENT_LIST_TOO_LONG,
    ERROR_NO_ACCESS,
    ERROR_ADDRESS_IN_USE,
    ERROR_ADDRESS_NOT_AVAILABLE,
    ERROR_ADDRESS_FAMILY_NOT_SUPPORTED,
    ERROR_NO_DATA_TRY_AGAIN_LATER,
    ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS,
    ERROR_FILE_DESCRIPTOR_NOT_VALID,
    ERROR_INVALID_DATA_MESSAGE,
    ERROR_DEVICE_OR_RESOURCE_BUSY,
    ERROR_OPERATION_CANCELLED,
    ERROR_NO_CHILD_PROCESSES,
    ERROR_NETWORK_CONNECTION_ABORTED,
    ERROR_NETWORK_CONNECTION_REFUSED,
    ERROR_NETWORK_CONNECTION_RESET,
    ERROR_RESOURCE_DEADLOCK_AVOIDED,
    ERROR_DESTINATION_ADDRESS_REQUIRED,
    ERROR_ARGUMENT_OUT_OF_DOMAIN,
    ERROR_DISK_QUOTA_EXCEEDED,
    ERROR_FILE_EXISTS,
    ERROR_INVALID_POINTER_ADDRESS,
    ERROR_FILE_TOO_LARGE,
    ERROR_HOST_UNREACHABLE,
    ERROR_IDENTIFIER_REMOVED,
    ERROR_ILLEGAL_BYTE_SEQUENCE,
    ERROR_OPERATION_ALREADY_IN_PROGRESS,
    ERROR_FUNCTION_CALL_INTERRUPTED,
    ERROR_INVALID_ARGUMENT,
    ERROR_UNSPECIFIED_IO_ERROR,
    ERROR_SOCKET_CONNECTED,
    ERROR_PATH_IS_A_DIRECTORY,
    ERROR_TOO_MANY_SYMLINKS_LEVELS,
    ERROR_TOO_MANY_OPEN_FILES,
    ERROR_TOO_MANY_LINKS_TO_FILE,
    ERROR_MESSAGE_TOO_LONG,
    ERROR_MULTIHOP_ATTEMPTED,
    ERROR_FILENAME_TOO_LONG,
    ERROR_NETWORK_IS_DOWN,
    ERROR_CONNECTION_ABORTED_BY_NETWORK,
    ERROR_NETWORK_UNREACHABLE,
    ERROR_NO_BUFFER_SPACE_AVAILABLE,
    ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM,
    ERROR_NO_SUCH_DEVICE,
    ERROR_NO_SUCH_FILE_OR_DIRECTORY,
    ERROR_EXEC_FORMAT,
    ERROR_NO_LOCKS_AVAILABLE,
    ERROR_LINK_SEVERED,
    ERROR_NOT_ENOUGH_SPACE,
    ERROR_NO_MESSAGE_OF_DESIRED_TYPE,
    ERROR_PROTOCOL_NOT_AVAILABLE,
    ERROR_NO_SPACE_ON_DEVICE,
    ERROR_NO_STREAM_RESOURCES_AVAILABLE,
    ERROR_RESOURCE_NOT_A_STREAM,
    ERROR_FUNCTION_NOT_IMPLEMENTED,
    ERROR_SOCKET_NOT_CONNECTED,
    ERROR_NOT_A_DIRECTORY,
    ERROR_DIRECTORY_NOT_EMPTY,
    ERROR_HOSTNAME_NOT_FOUND,
    ERROR_NOT_A_SOCKET,
    ERROR_OPERATION_NOT_SUPPORTED,
    ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION,
    ERROR_NO_SUCH_DEVICE_OR_ADDRESS,
    ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET,
    ERROR_VALUE_TOO_LARGE,
    ERROR_OPERATION_NOT_PERMITTED,
    ERROR_BROKEN_PIPE,
    ERROR_PROTOCOL_ERROR,
    ERROR_PROTOCOL_NOT_SUPPORTED,
    ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET,
    ERROR_RESULT_TOO_LARGE,
    ERROR_READ_ONLY_FILE_SYSTEM,
    ERROR_INVALID_SEEK_OPERATION,
    ERROR_NO_SUCH_PROCESS,
    ERROR_STALE_FILE_HANDLE,
    ERROR_TIMER_EXPIRED,
    ERROR_CONNECTION_TIMEOUT,
    ERROR_TEXT_FILE_BUSY,
    ERROR_OPERATION_WOULD_BLOCK,
    ERROR_IMPROPER_LINK,
    ERROR_UNKNOWN,
    createErrorFromSystemErrorCode
};

Object.freeze(errors);

module.exports = errors;
