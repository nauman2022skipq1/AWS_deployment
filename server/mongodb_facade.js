const { MongoClient, ServerApiVersion } = require('mongodb');
// const ObjectId = require('mongodb').ObjectID
const mongodb = require('mongodb')

async function dbget(){

    const uri = "mongodb+srv://database0:J6RwAxd4gXm08bi9@cluster0.dyvvb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect()

    const results = await client.db("database0").collection("collection0").find({}).toArray();

    // perform actions on the collection object
    await client.close();
    return results
};

async function dbpost(newVal){  
    const uri = "mongodb+srv://database0:J6RwAxd4gXm08bi9@cluster0.dyvvb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect()

    const results = await client.db("database0").collection("collection0").insertOne(newVal);
    await client.close()
    return results
}

async function dbdelete(id){
    const uri = "mongodb+srv://database0:J6RwAxd4gXm08bi9@cluster0.dyvvb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect()

    const results = await client.db("database0").collection("collection0").deleteOne({"_id": mongodb.ObjectId(id)});
    await client.close()
    return results
}

async function dbupdate(id, val){
    const uri = "mongodb+srv://database0:J6RwAxd4gXm08bi9@cluster0.dyvvb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect()

    const results = await client.db("database0").collection("collection0").updateOne({"_id": mongodb.ObjectId(id)}, {$set:{"value": val}});
    await client.close()
    return results
}

module.exports = {
    dbget,
    dbpost, 
    dbdelete,
    dbupdate
}