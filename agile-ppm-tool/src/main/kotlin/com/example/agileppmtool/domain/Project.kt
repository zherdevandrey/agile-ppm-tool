package com.example.agileppmtool.domain

import com.fasterxml.jackson.annotation.JsonFormat
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Document
data class Project(
    @Id
    var id: Int?,

    @field:NotBlank(message = "Project name is required")
    @field:Size(min = 2, max = 100, message = "Please use 2 to 100 characters")
    val projectName: String?,

    @Indexed(unique=true)
    @field:NotBlank(message = "Project Identifier is required")
    @field:Size(min = 4, max = 5, message = "Please use 4 to 5 characters")
    val projectId: String,

    @field:NotBlank(message = "Project description is required")
    val description: String,
    //@JsonFormat(pattern = "yyyy-mm-dd")
    val startDate: LocalDate,

    //@JsonFormat(pattern = "yyyy-mm-dd")
        val endDate: LocalDate

//    val createdDate: LocalDateTime,
//    val updatedDate: LocalDateTime
)
