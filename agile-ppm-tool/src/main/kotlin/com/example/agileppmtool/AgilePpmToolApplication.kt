package com.example.agileppmtool

import com.example.agileppmtool.domain.Project
import com.example.agileppmtool.repo.ProjectRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.time.LocalDate
import java.util.*
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean

import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener




@SpringBootApplication
class AgilePpmToolApplication(var projectRepository: ProjectRepository) : CommandLineRunner {
    override fun run(vararg args: String?) {

        val project1 = Project(
            id = 123,
            projectName = "React / Spring boot project",
            projectId = "1234",
            description = "Spring boot project description",
            startDate = LocalDate.now(),
            endDate = LocalDate.now()
        )

        val project2 = Project(
            id = 456,
            projectName = "Angular / Kotlin project",
            projectId = "5678",
            description = "Kotlin project description",
            startDate = LocalDate.now(),
            endDate = LocalDate.now()
        )

        projectRepository.deleteAll()
        projectRepository.save(project1)
        projectRepository.save(project2)
    }

}

fun main(args: Array<String>) {
    runApplication<AgilePpmToolApplication>(*args)
}
