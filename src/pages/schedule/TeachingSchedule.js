import React from "react";
import "./schedule-style/styles/customized/material.css";
import "./schedule-style/styles/material.css";

import { useSelector } from "react-redux";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';

function TeachingSchedule() {

  const userSchedule = useSelector(state => state.schedule.userSchedule);
  const checkSelectedDate = (data) => {
    if(data.tutor.schedule) {
      return data.tutor.schedule[0].StartTime
    }
    return new Date()
  }
  const checkEventSettings = (data) => {
    if(data.tutor.schedule) {
      return data.tutor.schedule
    }
    return false
  }

  return (
    <ScheduleComponent height="800px" selectedDate={checkSelectedDate(userSchedule)} eventSettings={{ dataSource: checkEventSettings(userSchedule) }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  )
}

export default TeachingSchedule