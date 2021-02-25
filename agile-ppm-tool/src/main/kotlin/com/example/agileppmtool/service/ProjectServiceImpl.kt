package com.example.agileppmtool.service


import com.example.agileppmtool.domain.Project
import com.example.agileppmtool.exceptions.ProjectIdException
import com.example.agileppmtool.repo.ProjectRepository
import org.springframework.stereotype.Service

@Service
class ProjectServiceImpl(
    var projectRepository: ProjectRepository,
    var sequenceGenerationService: SequenceGenerationService
) : ProjectService {

    override fun getProjectById(projectId: String): Project {
        return projectRepository.findByProjectId(projectId)
            ?: throw ProjectIdException("Project id $projectId does not exist")
    }

    override fun getProjects(): List<Project> {
        return projectRepository.findAll()
    }

    override fun saveProject(project: Project): Project {
        try {
            val sequenceNumber = sequenceGenerationService.getSequenceNumber("db_sequence")
            project.id = sequenceNumber
            return projectRepository.save(project)
        } catch (ex: Exception) {
            throw ProjectIdException("Project id ${project.id} already exist")
        }
    }

    override fun updateProject(project: Project): Project {
        try {
            return projectRepository.save(project)
        } catch (ex: Exception) {
            throw ProjectIdException(ex.message)
        }
    }

    override fun deleteProject(projectId: String) {
        val project = projectRepository.findByProjectId(projectId)
            ?: throw ProjectIdException("Project id $projectId does not exist")
        projectRepository.delete(project)
    }
}