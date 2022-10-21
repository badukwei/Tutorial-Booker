import React from "react";
import { useEffect, useState } from "react";
import "./schedule-style/styles/customized/material.css";
import "./schedule-style/styles/material.css";

import { useDispatch, useSelector } from "react-redux";
import { infoActions } from "../../Services/infoSlice";
import { scheduleActions } from "../../Services/scheduleSlice";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';

import scheduleData from "../../Data/scheduleData";


//改掉沒登入時，會空白頁的Bug
function LearningSchedule() {

  const userSchedule = useSelector(state => state.schedule.userSchedule);
  const checkSelectedDate = (data) => {
    if(data.tutee.schedule) {
      return data.tutee.schedule[0].StartTime
    }
    return new Date()
  }
  const checkEventSettings = (data) => {
    if(data.tutee.schedule) {
      return data.tutee.schedule
    }
    return false
  }

  return (
    <ScheduleComponent height="800px" selectedDate={checkSelectedDate(userSchedule)} eventSettings={{ dataSource: checkEventSettings(userSchedule) }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  )
}

export default LearningSchedule