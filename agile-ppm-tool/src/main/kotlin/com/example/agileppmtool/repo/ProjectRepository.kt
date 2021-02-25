package com.example.agileppmtool.repo

import com.example.agileppmtool.domain.Project
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.query.Param

interface ProjectRepository : MongoRepository<Project, String> {

    fun findByProjectId(@Param("projectId") projectId: String): Project?

}