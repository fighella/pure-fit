import React, { Component } from 'react';
import { DayBlock, DayBlockHeading } from './Styles';
// import { ConsoleLog } from '../../components/Logger';
// import { ScheduleTable } from './Styles';
import ScheduleRow from './Row';

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue['classes'] = currentValue
    );
    return result
  }, {})
}

const ScheduleClassesNew = props => {
  let { classes } = props;
  return(
    classes.map((_class, index) => {
      return (
        <ScheduleBlock yoga_class={_class} index_key={index}  />
    )
  })
  )
}

const ScheduleBlock = props => {
  const class_loop = props.yoga_class.classes.map((_class, index) => {
    return(<ScheduleRow yoga_class={_class} />)
  })
  return(
    <DayBlock>
      <DayBlockHeading>
        {props.yoga_class.grouping}
      </DayBlockHeading>
    <table>
      {class_loop}
    </table>
    </DayBlock>
  )
}


const ScheduleClasses = props => {
    let { dateText, dateHead } = false;
    const { location, classes, mini, view } = props;
    const classList = location
      ? classes.filter(function f(_class) {
          return _class.location === this;
        }, location)
      : classes;
    const classes_group = groupBy(classList, 'day');
    var grouped_classes = new Array();
    for (var key in classes_group) {
        grouped_classes.push({ grouping: key, classes: classes_group[key]});
    }
    return grouped_classes.length >= 1 ? (
        <ScheduleClassesNew classes={grouped_classes} />
      ) : (
        <p style={{ textAlign: 'center' }}>
          No classes were loaded for this period.
        </p>
      )
}

export default ScheduleClasses;