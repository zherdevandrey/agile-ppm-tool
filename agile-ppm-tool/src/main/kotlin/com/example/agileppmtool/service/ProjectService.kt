package com.example.agileppmtool.service

import com.example.agileppmtool.domain.Project

interface ProjectService {

    fun getProjectById(projectId:String): Project?
    fun getProjects():List<Project>
    fun saveProject(project: Project):Project
    fun updateProject(project: Project):Project
    fun deleteProject(projectId: String):Unit

}