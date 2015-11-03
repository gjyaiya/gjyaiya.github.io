title: Python Socket
url: python-socket
author: Vimous
date: 2010-12-22
category: Python
tags: [Python, demo]
abstract: 套接字模块是一个非常简单的基于对象的接口，它提供对低层BSD套接字样式网络的访问。使用该模块可以实现客户机和服务器套接字。要在python 中建立具有TCP和流套接字的简单服务器，需要使用socket模块。利用该模块包含的函数和类定义，可生成通过网络通信的程序。

套接字模块是一个非常简单的基于对象的接口，它提供对低层BSD套接字样式网络的访问。使用该模块可以实现客户机和服务器套接字。要在python 中建立具有TCP和流套接字的简单服务器，需要使用socket模块。利用该模块包含的函数和类定义，可生成通过网络通信的程序。

##建立服务器连接需要六个步骤

### 1. 创建socket对象。调用socket构造函数

    socket=socket.socket(familly,type)

> family的值可以是AF_UNIX(Unix域，用于同一台机器上的进程间通讯)，也可以是AF_INET（对于IPV4协议的TCP和UDP），至于type参数，SOCK_STREAM（流套接字）或者SOCK_DGRAM（数据报文套接字）,SOCK_RAW（raw套接字）。

### 2. socket绑定（指派）到指定地址上

    socket.bind(address)

> address必须是一个双元素元组,((host,port)),主机名或者ip地址+端口号。如果端口号正在被使用或者保留，或者主机名或ip地址错误，则引发socke.error异常。

### 3. 接受连接请求

    socket.listen(backlog)

> backlog指定了最多连接数，至少为1，接到连接请求后，这些请求必须排队，如果队列已满，则拒绝请求。

### 4. 等待客户请求一个连接

    connection,address=socket.accept()

> 调用accept方法时，socket会进入\'waiting\'（或阻塞）状态。客户请求连接时，方法建立连接并返回服务器。accept方法返回一个含有俩个元素的元组，形如(connection,address)。第一个元素（connection）是新的socket对象，服务器通过它与客户通信；第二个元素（address）是客户的internet地址。

### 5. 服务器和客户通过send和recv方法通信

> 服务器调用send，并采用字符串形式向客户发送信息。send方法返回已发送的字符个数。服务器使用recv方法从客户接受信息。调用recv时，必须指定一个整数来控制本次调用所接受的最大数据量。recv方法在接受数据时会进入'blocket'状态，最后返回一个字符串，用它来表示收到的数据。如果发送的量超过recv所允许，数据会被截断。多余的数据将缓冲于接受端。以后调用recv时，多余的数据会从缓冲区删除。

### 6. 服务器调用socket的close方法以关闭连接

##建立一个简单客户连接则需要4个步骤

###1. 创建一个socket以连接服务器
    socket=socket.socket(family,type)
###2. 使用socket的connect方法连接服务器
    socket.connect((host,port))
###3. 客户端和服务器通过send和recv方法通信。
###4. 客户端通过调用socket的close方法来关闭连接。
 
##python 编写server的步骤：

*server.py*

    if __name__ == '__main__':
        import socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.bind(('localhost', 8001))
        sock.listen(5)
        while True:
            connection,address = sock.accept()
            try:
                connection.settimeout(5)
                buf = connection.recv(1024)
                if buf == '1':
                    connection.send(\'welcome to server!\')
                else:
                    connection.send(\'please go out!\')
            except socket.timeout:
                print 'time out'
        connection.close()


*client.py*

    if __name__ == '__main__':
        import socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect(('localhost', 8001))
        import time
        time.sleep(2)
        sock.send('1')
        print sock.recv(1024)
        sock.close()

