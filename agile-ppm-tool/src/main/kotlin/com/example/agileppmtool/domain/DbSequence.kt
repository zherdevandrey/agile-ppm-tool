package com.example.agileppmtool.domain

import org.springframework.data.annotation.Id


import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "db_sequence")
class DbSequence(@Id val id: String? = null, val seq: Int? = null) {
}