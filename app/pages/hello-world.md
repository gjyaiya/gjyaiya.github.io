title: Hello World
url: hello-world
author: Vimous
date: 2010-12-22
category: Python
tags: [Python, demo]
abstract: Hello World

套接字模块是一个非常简单的基于对象的接口，它提供对低层BSD套接字样式网络的访问。使用该模块可以实现客户机和服务器套接字。要在python 中建立具有TCP和流套接字的简单服务器，需要使用socket模块。利用该模块包含的函数和类定义，可生成通过网络通信的程序。一般来说，建立服务器连接需要六个步骤。

- 第1步是创建socket对象。调用socket构造函数。

    socket=socket.socket(familly,type)

> family的值可以是AF_UNIX(Unix域，用于同一台机器上的进程间通讯)，也可以是AF_INET（对于IPV4协议的TCP和
> UDP），至于type参数，SOCK_STREAM（流套接字）或者
> SOCK_DGRAM（数据报文套接字）,SOCK_RAW（raw套接字）。

- 第2步则是将socket绑定（指派）到指定地址上，

    socket.bind(address)

> address必须是一个双元素元组,((host,port)),主机名或者ip地址+端口号。如果端口号正在被使用或者保留，或者主机名或ip地址错误，则引发socke.error异常。

- 第3步，绑定后，必须准备好套接字，以便接受连接请求。

    socket.listen(backlog)

> backlog指定了最多连接数，至少为1，接到连接请求后，这些请求必须排队，如果队列已满，则拒绝请求。

- 第4步，服务器套接字通过socket的accept方法等待客户请求一个连接：

    connection,address=socket.accept()

> 调用accept方法时，socket会进入\'waiting\'（或阻塞）状态。客户请求连接时，方法建立连接并返回服务器。accept方法返回一个含有俩个元素的元组，形如(connection,address)。第一个元素（connection）是新的socket对象，服务器通过它与客户通信；第二个元素（address）是客户的internet地址。

- 第5步是处理阶段，服务器和客户通过send和recv方法通信（传输数据）。

> 服务器调用send，并采用字符串形式向客户发送信息。send方法返回已发送的字符个数。服务器使用recv方法从客户接受信息。调用recv时，必须指定一个整数来控制本次调用所接受的最大数据量。recv方法在接受数据时会进入\'blocket\'状态，最后返回一个字符串，用它来表示收到的数据。如果发送的量超过recv所允许，数据会被截断。多余的数据将缓冲于接受端。以后调用recv时，多余的数据会从缓冲区删除。

- 第6步，传输结束，服务器调用socket的close方法以关闭连接。

建立一个简单客户连接则需要4个步骤。

- 第1步，创建一个socket以连接服务器 socket=socket.socket(family,type)
- 第2步，使用socket的connect方法连接服务器 -socket.connect((host,port))
- 第3步，客户和服务器通过send和recv方法通信。
- 第4步，结束后，客户通过调用socket的close方法来关闭连接。
 
###python 编写server的步骤：

- 第一步是创建socket对象。调用socket构造函数。如：

    socket = socket.socket( family, type )

> family参数代表地址家族，可为AF_INET或AF_UNIX。AF_INET家族包括Internet地址，AF_UNIX家族用于同一台机器上的进程间通信。
> type参数代表套接字类型，可为SOCK_STREAM(流套接字)和SOCK_DGRAM(数据报套接字)。

- 第二步是将socket绑定到指定地址。这是通过socket对象的bind方法来实现的：

    socket.bind( address )

> 由AF_INET所创建的套接字，address地址必须是一个双元素元组，格式是(host,port)。host代表主机，port代表端口号。如果端口号正在使用、主机名不正确或端口已被保留，bind方法将引发socket.error异常。

- 第三步是使用socket套接字的listen方法接收连接请求。

    socket.listen( backlog )

> backlog指定最多允许多少个客户连接到服务器。它的值至少为1。收到连接请求后，这些请求需要排队，如果队列满，就拒绝请求

- 第四步是服务器套接字通过socket的accept方法等待客户请求一个连接。

    connection, address = socket.accept()

> 调用accept方法时，socket会时入“waiting”状态。客户请求连接时，方法建立连接并返回服务器。accept方法返回一个含有两个元素的元组(connection,address)。第一个元素connection是新的socket对象，服务器必须通过它与客户通信；第二个元素
> address是客户的Internet地址。

- 第五步是处理阶段，

> 服务器和客户端通过send和recv方法通信(传输数据)。服务器调用send，并采用字符串形式向客户发送信息。send方法返回已发送的字符个数。服务器使用recv方法从客户接收信息。调用recv
> 时，服务器必须指定一个整数，它对应于可通过本次方法调用来接收的最大数据量。recv方法在接收数据时会进入“blocked”状态，最后返回一个字符串，用它表示收到的数据。如果发送的数据量超过了recv所允许的，数据会被截短。多余的数据将缓冲于接收端。以后调用recv时，多余的数据会从缓冲区删除(以及自上次调用recv以来，客户可能发送的其它任何数据)。

- 传输结束，服务器调用socket的close方法关闭连接。

###python编写client的步骤：

> 创建一个socket以连接服务器：socket = socket.socket( family, type )
> 使用socket的connect方法连接服务器。对于AF_INET家族,连接格式如下： socket.connect(
> (host,port) )
> host代表服务器主机名或IP，port代表服务器进程所绑定的端口号。如连接成功，客户就可通过套接字与服务器通信，如果连接失败，会引发socket.error异常。
> 处理阶段，客户和服务器将通过send方法和recv方法通信。 传输结束，客户通过调用socket的close方法关闭连接。

###下面给个简单的例子：

    server.py
    python 代码
    if __name__ == \'__main__\':
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind((\'localhost\', 8001))
    sock.listen(5)
    while True:
    connection,address = sock.accept()
    try:
    connection.settimeout(5)
    buf = connection.recv(1024)
    if buf == \'1\':
    connection.send(\'welcome to server!\')
    else:
    connection.send(\'please go out!\')
    except socket.timeout:
    print \'time out\'
    connection.close()

    client.py
    python 代码
    if __name__ == \'__main__\':
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((\'localhost\', 8001))
    import time
    time.sleep(2)
    sock.send(\'1\')
    print sock.recv(1024)
    sock.close()
