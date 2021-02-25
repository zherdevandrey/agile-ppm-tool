package com.example.agileppmtool.exceptions

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.WebRequest
import org.springframework.web.context.request.async.AsyncWebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@RestController
@ControllerAdvice
class CustomResponseEntityExceptionHAndler: ResponseEntityExceptionHandler() {

    @ExceptionHandler(ProjectIdException::class)
    fun handleProjectIdException(projectIdException: ProjectIdException, webRequest: WebRequest):ResponseEntity<ProjectIdExceptionResponse>{
        val projectIdExceptionResponse = ProjectIdExceptionResponse(projectIdException.message)
        return ResponseEntity(projectIdExceptionResponse, HttpStatus.BAD_REQUEST)
    }

}