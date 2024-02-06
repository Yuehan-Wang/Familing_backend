class RepeatSchedule {
  constructor({
    frequency, // 'daily', 'weekly', 'monthly', 'custom'
    interval, // Number representing the interval for the frequency
    daysOfWeek,
    dayOfMonth,
    customPattern, // Custom pattern (could be a string or object defining custom repeat logic)
    startTime, // Start time for the schedule
    endTime, // End time for the schedule (optional, for tasks within a single day)
  }) {
    this.frequency = frequency;
    this.interval = interval;
    this.daysOfWeek = daysOfWeek;
    this.dayOfMonth = dayOfMonth;
    this.customPattern = customPattern;
    this.startTime = startTime; // could be a Date object or a string in a specific format
    this.endTime = endTime; // same as startTime
  }

  toJSON() {
    return {
      frequency: this.frequency,
      interval: this.interval,
      daysOfWeek: this.daysOfWeek,
      dayOfMonth: this.dayOfMonth,
      customPattern: this.customPattern,
      startTime: this.startTime,
      endTime: this.endTime,
    };
  }
}
