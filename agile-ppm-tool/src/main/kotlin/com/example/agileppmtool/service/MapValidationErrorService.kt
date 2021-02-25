package com.example.agileppmtool.service

import org.springframework.stereotype.Service
import org.springframework.validation.BindingResult

@Service
class MapValidationErrorService {

    fun validate(result: BindingResult): Map<String, String?> {
        val errors = mutableMapOf<String, String?>()
        if (result.hasErrors()) {
            result.fieldErrors.forEach {
                errors[it.field] = it.defaultMessage
            }
        }
        return errors
    }

}