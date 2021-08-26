import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './pages/register-course/register-course.component';
import { RegisterMatterComponent } from './pages/register-matter/register-matter.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { RegisterTeacherComponent } from './pages/register-teacher/register-teacher.component';

const routes: Routes = [{ path: '', component: RegisterStudentComponent }, { path: 'registerTeacher', component: RegisterTeacherComponent }, { path: 'registerCourse', component: RegisterCourseComponent }, { path: 'registerMatter', component: RegisterMatterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
