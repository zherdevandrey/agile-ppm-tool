package com.example.agileppmtool.service


import com.example.agileppmtool.domain.DbSequence
import org.springframework.data.mongodb.core.FindAndModifyOptions.options
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service


@Service
class SequenceGenerationService(var mongoOperations: MongoOperations) {

    fun getSequenceNumber(sequenceName: String?): Int {
        //get sequence no
        val query = Query(Criteria.where("id").`is`(sequenceName))
        //update the sequence no
        val update = Update().inc("seq", 1)
        //modify in document
        val counter = mongoOperations
            .findAndModify(
                query,
                update, options().returnNew(true).upsert(true),
                DbSequence::class.java
            )


        return counter?.seq ?: 1
    }

}