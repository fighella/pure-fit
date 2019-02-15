import React from 'react'
import moment from 'moment-timezone';
const zone = 'Etc/GMT';

class EvolvePresenter {
  constructor(workshop){
    this.workshop = workshop
  }

  get title(){
    return this.cleanTitle();
  }

  get location(){
    return this.cleanLocation();
  }

  get datesText(){
    return this.cleanDates();
  }

  get teacherText(){
    return this.cleanTeachers();
  }

  cleanDates() {
    // , this.endDate() Don't show end date
    const dates = [ ...new Set([this.startDate()].filter(Boolean)) ]
    return(
      this.workshop.custom_dates || [dates.join(' - '), this.cleanTimes()].join(' | ')
    )
  }

  cleanTimes() {
    const times =  [ ...new Set([this.startTime(), this.endTime()].filter(Boolean)) ]
    return(
      this.workshop.customTimes || times.join(' - ')
    )
  }

  cleanTitle() {
    return this.workshop.title
  }

  cleanLocation() {
    return this.workshop.custom_location || this.workshop.location
  }

  cleanTeachers() {
    return this.workshop.custom_teacher_text || this.workshop.teacher_text
  }

  endTime() {
    return this.workshop.end_time > this.workshop.start_time ? moment.tz(this.workshop.end_time, zone).format('h:mma') : false
  }

  startTime() {
    return this.workshop.start_time ? moment.tz(this.workshop.start_time, zone).format('h:mma') : false
  }

  endDate() {
    return this.workshop.end_time > this.workshop.start_time ? moment.tz(this.workshop.end_time, zone).format('ll') : false
  }

  startDate() {
      return this.workshop.start_time ? moment.tz(this.workshop.start_time, zone).format('ll') : false
  }


}


export default EvolvePresenter