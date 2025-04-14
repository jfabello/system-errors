# Node.js Custom System Error Classes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Node.js module that maps common POSIX system error codes into custom system error classes.

This module helps developers handle POSIX system errors with meaningful and descriptive error messages, enhancing the debugging and error-handling processes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating Errors Based on System Error Codes](#creating-errors-based-on-system-error-codes)
  - [Custom System Error Classes](#custom-system-error-classes)
- [POSIX System Errors Mapped](#posix-system-errors-mapped)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this module via npm:

```shell
npm install @jfabello/system-errors
```

## Usage

After installation, import the module and use the `createErrorFromSystemErrorCode()` method or the predefined custom system error classes in your application:

```javascript
import { errors as systemErrors } from "@jfabello/system-errors";

try {
	// Some code that might throw a POSIX system error
} catch (error) {
	if ("code" in error) {
		throw systemErrors.createErrorFromSystemErrorCode(error.code);
	} else {
		throw new systemErrors.errors.ERROR_UNKNOWN();
	}
}
```

### Creating Errors Based on System Error Codes

This module provides a `createErrorFromSystemErrorCode()` method, which dynamically creates a custom system error object based on the POSIX system error code:

```javascript
import { errors as systemErrors } from "@jfabello/system-errors";

const error = systemErrors.createErrorFromSystemErrorCode("EACCES");
console.log(error.message); // Output: The operation does not have enough permissions.
```

This method takes a string as its only argument. It returns an instance of the custom system error class that corresponds to the POSIX system error code passed in the string, or an instance of `ERROR_UNKNOWN` if the string can't be matched to a particular POSIX system error code.

### Custom System Error Classes

The module also provides predefined custom system error classes that can be used directly in your code. These classes can be accessed via the `errors` object. Each class represents a specific POSIX system error and has a descriptive message associated with it:

```javascript
import { errors as systemErrors } from "@jfabello/system-errors";

const error = new systemErrors.errors.ERROR_NO_ACCESS();
console.log(error.message); // Output: The operation does not have enough permissions.
```

## POSIX System Errors Mapped

| POSIX Error       | Error Class                                   | Error Message                                           |
| ----------------- | --------------------------------------------- | ------------------------------------------------------- |
| `E2BIG`           | `ERROR_ARGUMENT_LIST_TOO_LONG`                | The list of arguments is longer than expected           |
| `EACCES`          | `ERROR_NO_ACCESS`                             | The operation does not have enough permissions          |
| `EADDRINUSE`      | `ERROR_ADDRESS_IN_USE`                        | The network address is already in use                   |
| `EADDRNOTAVAIL`   | `ERROR_ADDRESS_NOT_AVAILABLE`                 | The network address is currently unavailable for use    |
| `EAFNOSUPPORT`    | `ERROR_ADDRESS_FAMILY_NOT_SUPPORTED`          | The network address family is not supported             |
| `EAGAIN`          | `ERROR_NO_DATA_TRY_AGAIN_LATER`               | There is no data available. Try again later             |
| `EALREADY`        | `ERROR_SOCKET_PENDING_CONNECTION_IN_PROGRESS` | The socket already has a pending connection in progress |
| `EBADF`           | `ERROR_FILE_DESCRIPTOR_NOT_VALID`             | File descriptor is not valid                            |
| `EBADMSG`         | `ERROR_INVALID_DATA_MESSAGE`                  | Invalid data message                                    |
| `EBUSY`           | `ERROR_DEVICE_OR_RESOURCE_BUSY`               | Device or resource is busy                              |
| `ECANCELED`       | `ERROR_OPERATION_CANCELLED`                   | The operation was canceled                              |
| `ECHILD`          | `ERROR_NO_CHILD_PROCESSES`                    | There are no child processes                            |
| `ECONNABORTED`    | `ERROR_NETWORK_CONNECTION_ABORTED`            | The network connection has been aborted                 |
| `ECONNREFUSED`    | `ERROR_NETWORK_CONNECTION_REFUSED`            | The network connection has been refused                 |
| `ECONNRESET`      | `ERROR_NETWORK_CONNECTION_RESET`              | The network connection has been reset                   |
| `EDEADLK`         | `ERROR_RESOURCE_DEADLOCK_AVOIDED`             | A resource deadlock has been avoided                    |
| `EDESTADDRREQ`    | `ERROR_DESTINATION_ADDRESS_REQUIRED`          | A destination address is required                       |
| `EDOM`            | `ERROR_ARGUMENT_OUT_OF_DOMAIN`                | An argument is out of the domain of the function        |
| `EDQUOT`          | `ERROR_DISK_QUOTA_EXCEEDED`                   | The disk quota has been exceeded                        |
| `EEXIST`          | `ERROR_FILE_EXISTS`                           | The file already exists                                 |
| `EFAULT`          | `ERROR_INVALID_POINTER_ADDRESS`               | Invalid pointer address                                 |
| `EFBIG`           | `ERROR_FILE_TOO_LARGE`                        | The file is too large                                   |
| `EHOSTUNREACH`    | `ERROR_HOST_UNREACHABLE`                      | The host is unreachable                                 |
| `EIDRM`           | `ERROR_IDENTIFIER_REMOVED`                    | The identifier has been removed                         |
| `EILSEQ`          | `ERROR_ILLEGAL_BYTE_SEQUENCE`                 | Illegal byte sequence                                   |
| `EINPROGRESS`     | `ERROR_OPERATION_ALREADY_IN_PROGRESS`         | An operation is already in progress                     |
| `EINTR`           | `ERROR_FUNCTION_CALL_INTERRUPTED`             | A function call was interrupted                         |
| `EINVAL`          | `ERROR_INVALID_ARGUMENT`                      | An invalid argument was provided                        |
| `EIO`             | `ERROR_UNSPECIFIED_IO_ERROR`                  | Unspecified I/O error                                   |
| `EISCONN`         | `ERROR_SOCKET_CONNECTED`                      | The socket is connected                                 |
| `EISDIR`          | `ERROR_PATH_IS_A_DIRECTORY`                   | The path is a directory                                 |
| `ELOOP`           | `ERROR_TOO_MANY_SYMLINKS_LEVELS`              | Too many levels of symbolic links in a path             |
| `EMFILE`          | `ERROR_TOO_MANY_OPEN_FILES`                   | Too many open files                                     |
| `EMLINK`          | `ERROR_TOO_MANY_LINKS_TO_FILE`                | Too many hard links to the file                         |
| `EMSGSIZE`        | `ERROR_MESSAGE_TOO_LONG`                      | The provided message is too long                        |
| `EMULTIHOP`       | `ERROR_MULTIHOP_ATTEMPTED`                    | A multihop was attempted                                |
| `ENAMETOOLONG`    | `ERROR_FILENAME_TOO_LONG`                     | The filename is too long                                |
| `ENETDOWN`        | `ERROR_NETWORK_IS_DOWN`                       | The network is down                                     |
| `ENETRESET`       | `ERROR_CONNECTION_ABORTED_BY_NETWORK`         | The connection has been aborted by the network          |
| `ENETUNREACH`     | `ERROR_NETWORK_UNREACHABLE`                   | The network is unreachable                              |
| `ENFILE`          | `ERROR_TOO_MANY_OPEN_FILES`                   | Too many open files in the system                       |
| `ENOBUFS`         | `ERROR_NO_BUFFER_SPACE_AVAILABLE`             | No buffer space is available                            |
| `ENODATA`         | `ERROR_NO_MESSAGE_AVAILABLE_ON_STREAM`        | No message available on the stream head read queue      |
| `ENODEV`          | `ERROR_NO_SUCH_DEVICE`                        | There is no such device                                 |
| `ENOENT`          | `ERROR_NO_SUCH_FILE_OR_DIRECTORY`             | No such file or directory                               |
| `ENOEXEC`         | `ERROR_EXEC_FORMAT`                           | Exec format error                                       |
| `ENOLCK`          | `ERROR_NO_LOCKS_AVAILABLE`                    | No locks available                                      |
| `ENOLINK`         | `ERROR_LINK_SEVERED`                          | A link has been severed                                 |
| `ENOMEM`          | `ERROR_NOT_ENOUGH_SPACE`                      | Not enough space                                        |
| `ENOMSG`          | `ERROR_NO_MESSAGE_OF_DESIRED_TYPE`            | No message of the desired type                          |
| `ENOPROTOOPT`     | `ERROR_PROTOCOL_NOT_AVAILABLE`                | A given protocol is not available                       |
| `ENOSPC`          | `ERROR_NO_SPACE_ON_DEVICE`                    | No space available on the device                        |
| `ENOSR`           | `ERROR_NO_STREAM_RESOURCES_AVAILABLE`         | No stream resources available                           |
| `ENOSTR`          | `ERROR_RESOURCE_NOT_A_STREAM`                 | The resource is not a stream                            |
| `ENOSYS`          | `ERROR_FUNCTION_NOT_IMPLEMENTED`              | Function has not been implemented                       |
| `ENOTCONN`        | `ERROR_SOCKET_NOT_CONNECTED`                  | The socket is not connected                             |
| `ENOTDIR`         | `ERROR_NOT_A_DIRECTORY`                       | The path is not a directory                             |
| `ENOTEMPTY`       | `ERROR_DIRECTORY_NOT_EMPTY`                   | The directory is not empty                              |
| `ENOTFOUND`       | `ERROR_HOSTNAME_NOT_FOUND`                    | The host name was not found                             |
| `ENOTSOCK`        | `ERROR_NOT_A_SOCKET`                          | The given item is not a socket                          |
| `ENOTSUP`         | `ERROR_OPERATION_NOT_SUPPORTED`               | A given operation is not supported                      |
| `ENOTTY`          | `ERROR_INAPPROPRIATE_IO_CONTROL_OPERATION`    | Inappropriate I/O control operation                     |
| `ENXIO`           | `ERROR_NO_SUCH_DEVICE_OR_ADDRESS`             | No such device or address                               |
| `EOPNOTSUPP`      | `ERROR_OPERATION_NOT_SUPPORTED_ON_SOCKET`     | An operation is not supported on the socket             |
| `EOVERFLOW`       | `ERROR_VALUE_TOO_LARGE`                       | Value too large to be stored in data type               |
| `EPERM`           | `ERROR_OPERATION_NOT_PERMITTED`               | The operation is not permitted                          |
| `EPIPE`           | `ERROR_BROKEN_PIPE`                           | Broken pipe                                             |
| `EPROTO`          | `ERROR_PROTOCOL_ERROR`                        | Protocol error                                          |
| `EPROTONOSUPPORT` | `ERROR_PROTOCOL_NOT_SUPPORTED`                | Protocol is not supported                               |
| `EPROTOTYPE`      | `ERROR_WRONG_PROTOCOL_TYPE_FOR_SOCKET`        | Wrong type of protocol for a socket                     |
| `ERANGE`          | `ERROR_RESULT_TOO_LARGE`                      | Result is too large                                     |
| `EROFS`           | `ERROR_READ_ONLY_FILE_SYSTEM`                 | The file system is read-only                            |
| `ESPIPE`          | `ERROR_INVALID_SEEK_OPERATION`                | Invalid seek operation                                  |
| `ESRCH`           | `ERROR_NO_SUCH_PROCESS`                       | No such process                                         |
| `ESTALE`          | `ERROR_STALE_FILE_HANDLE`                     | The file handle is stale                                |
| `ETIME`           | `ERROR_TIMER_EXPIRED`                         | The timer expired                                       |
| `ETIMEDOUT`       | `ERROR_CONNECTION_TIMEOUT`                    | The connection timed out                                |
| `ETXTBSY`         | `ERROR_TEXT_FILE_BUSY`                        | Text file is busy                                       |
| `EWOULDBLOCK`     | `ERROR_OPERATION_WOULD_BLOCK`                 | The operation would block                               |
| `EXDEV`           | `ERROR_IMPROPER_LINK`                         | Improper link                                           |

## Contributing

Unfortunately, we are not able to accept contributions at this time.

If you find a bug in the code, please open an issue.

Thank you for your understanding.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
