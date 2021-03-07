package com.example.agileppmtool.domain

import com.fasterxml.jackson.annotation.JsonFormat
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

@Document
data class Project(
    @Id
    var id: Int?,

    @field:NotBlank(message = "Project name is required")
    @field:Size(min = 2, max = 100, message = "Please use 2 to 100 characters")
    val projectName: String?,

    @Indexed(unique=true)
    var projectId: String?,

    @field:NotBlank(message = "Project description is required")
    val description: String?,

    @field:NotNull(message = "Project start Date is required")
    @JsonFormat(pattern = "yyyy-MM-dd")
    val startDate: LocalDate?,

    @field:NotNull(message = "Project end Date is required")
    @JsonFormat(pattern = "yyyy-MM-dd")
    val endDate: LocalDate?

//    val createdDate: LocalDateTime,
//    val updatedDate: LocalDateTime
)
