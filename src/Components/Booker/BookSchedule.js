import React from "react";

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';

function BookSchedule(props) {

  return (
    <ScheduleComponent height="800px" selectedDate={props.schedule[0].StartTime} eventSettings={{ dataSource: props.schedule }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  )
}

export default BookSchedule