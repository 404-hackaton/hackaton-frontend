The error message you're encountering:

```
TypeError: Cannot read properties of undefined (reading 'toISOString')
```

indicates that somewhere in your code, you're attempting to call `toISOString()` on an `undefined` value. This typically means that the variable or property you're trying to use is `undefined` at that point in the code.

Let's investigate where `toISOString()` is used in your code and find potential places where the variable might be `undefined`.

---

**1. Locations Where `toISOString()` Is Called:**

- **In `SchedulePage.vue`:**

  ```html
  <div class="content" v-for="day in days" :key="day.date.toISOString()">
    <!-- ... -->
  </div>
  ```

- **In `SchedulePage.vue` within `getNewDate`:**

  ```javascript
  console.log(`Schedule for ${date.toISOString()}:`, scheduleItems);
  ```

- **In `ScheduleDatapickerComponent.vue`:**

  ```javascript
  currentDate.value = newDateObj.toISOString();
  oldGDate.value = newDate.toISOString();
  ```

---

**2. Likely Cause of the Error:**

Given that the error message is about reading `toISOString` of `undefined`, it's likely that one of the variables (`day.date`, `date`, `newDateObj`, or `newDate`) is `undefined` at the time `toISOString()` is called.

A common culprit is the `:key="day.date.toISOString()"` in your `v-for` loop in `SchedulePage.vue`. If `day.date` is `undefined`, this will throw an error.

---

**3. Steps to Identify and Fix the Issue:**

**a. Verify the `days` Array Initialization:**

Ensure that the `days` array is always initialized correctly and that each `day` object has a valid `date` property.

```javascript
const days = ref([
  { date: new Date(Date.now() - 24 * 3600 * 1000), items: ["1", "2", "3"] },
  { date: new Date(), items: ["1", "2", "3"] },
  { date: new Date(Date.now() + 24 * 3600 * 1000), items: ["1", "2", "3"] },
]);
```

**b. Check the `handleDateChange` Function:**

Ensure that when you rebuild the `days` array, you always include the `date` property and that it's a valid `Date` object.

```javascript
if (diffInDays !== 0) {
  // Date changed by more than one day, rebuild the days array
  animation.value = "none";
  position.value = "-100vw";

  days.value = [
    {
      date: new Date(newDateObj.getTime() - 24 * 3600 * 1000),
      items: getNewDate(new Date(newDateObj.getTime() - 24 * 3600 * 1000)),
    },
    {
      date: newDateObj,
      items: getNewDate(newDateObj),
    },
    {
      date: new Date(newDateObj.getTime() + 24 * 3600 * 1000),
      items: getNewDate(new Date(newDateObj.getTime() + 24 * 3600 * 1000)),
    },
  ];
  allowDateChange.value = true;
}
```

**c. Add Defensive Checks in the Template:**

Modify your template to handle cases where `day.date` might be `undefined`.

```html
<div
  class="content"
  v-for="day in days"
  :key="day.date ? day.date.toISOString() : 'undefined-date'"
>
  <ScheduleItem v-for="item in day.items" :key="item" />
</div>
```

**d. Validate `getNewDate` Function:**

Ensure that `getNewDate` always receives a valid `Date` object and that it doesn't inadvertently return `undefined`.

```javascript
const getNewDate = (date: Date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date passed to getNewDate:', date);
    return [];
  }
  const scheduleItems = ["1", "2", "4", "5", "7"];
  console.log(`Schedule for ${date.toISOString()}:`, scheduleItems);
  return scheduleItems;
};
```

**e. Check `handleCalendarChange` in `ScheduleDatapickerComponent.vue`:**

Ensure that `event.detail.value` is valid and that `newDate` is a valid `Date` object.

```javascript
const handleCalendarChange = (event: any) => {
  const oldDate = new Date(oldGDate.value);
  const newDateValue = event.detail.value;
  if (!newDateValue) {
    console.error('event.detail.value is undefined:', event);
    return;
  }
  const newDate = new Date(newDateValue);
  if (isNaN(newDate.getTime())) {
    console.error('Invalid newDate in handleCalendarChange:', newDateValue);
    return;
  }
  oldGDate.value = newDate.toISOString();
  emit("dateChanged", newDate, oldDate);
};
```

**f. Ensure `currentDate` and `oldGDate` Are Always Defined:**

Since you're using `currentDate.value` and `oldGDate.value`, make sure they are initialized properly and not set to `undefined` elsewhere in your code.

---

**4. Potential Issue with `ion-datetime` in Production:**

In production mode, sometimes event structures can differ due to minification or other optimizations. The `ion-datetime` component might not be emitting the `ionChange` event in the same way.

To safeguard against this:

- Add console logs to `handleCalendarChange` to see the structure of `event` and `event.detail`.

```javascript
const handleCalendarChange = (event: any) => {
  console.log('handleCalendarChange event:', event);
  const oldDate = new Date(oldGDate.value);
  const newDateValue = event.detail?.value;
  if (!newDateValue) {
    console.error('event.detail.value is undefined:', event);
    return;
  }
  // ... rest of the code
};
```

- Ensure that `event.detail` and `event.detail.value` are present before using them.

---

**5. Use Optional Chaining and Nullish Coalescing:**

In your template and code, use optional chaining (`?.`) and nullish coalescing (`??`) to handle `undefined` values gracefully.

```html
<div
  class="content"
  v-for="day in days"
  :key="day.date?.toISOString() ?? 'undefined-date-' + index"
>
  <!-- ... -->
</div>
```

---

**6. Test in Production Mode with Debugging Tools:**

Since the issue appears in production mode, it's crucial to test and debug in that environment.

- Use browser developer tools to check the console for errors and logs.
- Ensure that source maps are enabled in your build configuration to map minified code back to your source code.
- Temporarily add more verbose logging to capture the state of variables at critical points.

---

**7. Summary of Actions:**

- **Check for `undefined` values** where `toISOString()` is called.
- **Add validation and error handling** in functions where date variables are assigned or manipulated.
- **Modify the template** to handle cases where `day.date` might be `undefined`.
- **Ensure consistent initialization** of all date variables.
- **Debug event structures** in `ion-datetime` to ensure compatibility in production mode.
- **Test thoroughly** in both development and production environments.

---

**8. Example of Updated `SchedulePage.vue` Template:**

```html
<template>
  <ion-page>
    <Header header="Расписание" />
    <ion-content>
      <div class="w-full flex justify-center ">
        <ScheduleDatepicker
          ref="datepickerRef"
          class="datapick"
          :disabled="!allowDateChange"
          @dateChanged="handleDateChange"
        />
      </div>
      <div
        class="contentc"
        ref="contentEl"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          class="content"
          v-for="(day, index) in days"
          :key="day.date?.toISOString() ?? 'undefined-date-' + index"
        >
          <ScheduleItem v-for="item in day.items" :key="item" />
        </div>
      </div>
      <!-- ... -->
    </ion-content>
    <Navbar />
  </ion-page>
</template>
```

---

**9. Final Thoughts:**

The key to resolving this issue is to **ensure that all variables used with `toISOString()` are valid `Date` objects** and to add **defensive programming practices** to handle unexpected `undefined` values.

By carefully checking each place where `toISOString()` is called and validating the data you're working with, you can prevent this error from occurring.

---

Let me know if you need further assistance or if the issue persists after making these adjustments!