---
layout: blog
title: 你好，世界
author: vimous
category: Web
tags: python sdk
abstract: MongoDB 基本操作
---

###1.连接

    #创建Connection,指定host及port参数
    import pymongo
    from bson import ObjectId,json_util
    conn = pymongo.Connection(host=\'127.0.0.1\',port=27017)
    
    #连接数据库
    db = conn.DB
    db = conn[\'DB\']
    
    #连接聚集
    blogs = db.blogs
    blogs = db["blogs"]
    
    #查看全部聚集名称
    db.collection_names()

###2.find

    #查看聚集的一条记录
    db.blogs.find_one({"category":"python"})
    db.blogs.find_one({"category":{\'$in\':[\'python\',\'js\']}})
    
    #查看聚集的字段
    db.blogs.find_one({\'_id\':ObjectId(bid)},{"title":1,"content":1})
    
    #查看聚集的多条记录
    for blog in db.blogs.find({"category":"python"}):
            blog["title"]
    
    #查看聚集的记录统计
    db.blogs.find().count()
    db.blogs.find({"category":"python"}).count()
    
    #聚集查询结果排序
    db.blogs.find().sort("date")  #默认为升序
    db.blogs.find().sort("date",pymongo.ASCENDING)   #升序
    db.blogs.find().sort("date",pymongo.DESCENDING)  #降序
    
    #聚集查询结果多列排序
    db.blogs.find().sort([("date",pymongo.ASCENDING),("title",pymongo.DESCENDING)])
    
    #分页
    db.blogs.find({"category":"python"}).limit(11).skip(20) #第11条到第20条记录

###3.update/insert/remove

    #修改记录
    db.collection.update( criteria, objNew, upsert, multi )
    \'\'\'
    criteria : update的查询条件，类似sql update查询内where后面的
    objNew   : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
    upsert   : 这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
    multi    : mongodb默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
    \'\'\'
    db.blogs.update({\'_id\':ObjectId(bid)},{"$set":{"author":"vimous","category":"python"}})
    
    db.blogs.update({},{ $set : { "author" : "vimous"} } ) #只更新了第一条记录
    db.blogs.update({},{ $set : { "author" : "vimous"} },false,true )#全更新了
    db.blogs.update({},{ $set : { "author" : "vimous"} },true,false )#只加进去了第一条
    db.blogs.update({},{ $set : { "author" : "vimous"} },true,true )#全加进去了
    db.blogs.update({},{ $inc : { "count" : 1} },false,true )#全更新了
    db.blogs.update({},{ $inc : { "count" : 1} },false,false )#只更新了第一条
    \'\'\'
    { $inc : { field : value } }对一个数字字段field增加value
    { $set : { field : value } }
    { $unset : { field : 1} }删除字段
    { $push : { field : value } }
    把value追加到field里面去，field一定要是数组类型才行，如果field不存在，会新增一个数组类型加进去
    
    { $pop : { field : 1  } } 删除数组内的最后一个值
    { $pop : { field : -1  } } 删除数组内的第一个值
    {$pull : { field : value } }从数组field内删除一个等于value值
    
    \'\'\'
    #添加记录
    db.blogs.insert({"blogsID":21,"title":"title"})
    
    #删除记录
    db.blogs.remove()   #全部删除
    db.Test.remove({\'_id\':ObjectId(bid)})
