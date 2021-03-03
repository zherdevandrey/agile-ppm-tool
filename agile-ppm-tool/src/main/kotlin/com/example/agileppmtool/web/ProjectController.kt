package com.example.agileppmtool.web

import com.example.agileppmtool.domain.Project
import com.example.agileppmtool.exceptions.ProjectIdException
import com.example.agileppmtool.service.MapValidationErrorService
import com.example.agileppmtool.service.ProjectService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import javax.validation.Valid

@RestController
@RequestMapping("/api/project")
@CrossOrigin
class ProjectController(var projectService: ProjectService) {

    @GetMapping("/{projectId}")
    fun getProject(@PathVariable projectId: String): Project? {
        return projectService.getProjectById(projectId)
    }

    @GetMapping("/all")
    fun getProjects(): List<Project> {
        println("get all")
        return projectService.getProjects()
    }

    @PostMapping
    fun saveProject(@Valid @RequestBody project: Project,
                    result: BindingResult,
                    validationService: MapValidationErrorService
    ): ResponseEntity<Map<String, String?>> {
        println("post call")
        val errors = validationService.validate(result)
        if (errors.isNotEmpty()) return ResponseEntity(errors, HttpStatus.BAD_REQUEST)



        val saveProject = projectService.saveProject(project)
        val uri = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(saveProject.id)
            .toUri()
        return ResponseEntity.created(uri).build()
    }

    @PutMapping
    fun updateProject(@RequestBody Project: Project): ResponseEntity<Unit> {
        val updatedProject = projectService.saveProject(Project)
        val uri = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(updatedProject.id)
            .toUri()
        return ResponseEntity.ok().build()
        // return helloWorldService.saveProject(Project)
    }

    @DeleteMapping("/{projectId}")
    fun deleteProject(@PathVariable projectId: String) {
        println("get by id")
         projectService.deleteProject(projectId)
    }

}