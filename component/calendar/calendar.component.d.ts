import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomRenderer } from '../common/dom';
export declare class CalendarComponent implements ControlValueAccessor, OnInit, OnDestroy {
    domRenderer: DomRenderer;
    firstDayOfWeek: number;
    lang: string;
    format: string;
    hourFormat: string;
    width: number;
    pholder: string;
    readonly: boolean;
    minDate: string;
    maxDate: string;
    inline: boolean;
    disabled: boolean;
    defaultDate: string;
    showTime: boolean;
    onChange: EventEmitter<any>;
    _locale: {
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
    };
    _locale_cn: {
        dayNamesShort: string[];
        monthNamesShort: string[];
    };
    _selectLocale: any;
    _week: string[];
    currentDate: any;
    currentYear: number;
    currentMonth: number;
    currentDay: number;
    currentHour: number;
    currentMinute: number;
    currentSecond: number;
    currentWeek: number;
    todayDate: any;
    rows: number;
    cols: number;
    dates: any[];
    itemWidth: number;
    value: any;
    selfClick: boolean;
    opened: boolean;
    itemClick: boolean;
    yearState: boolean;
    monthState: boolean;
    months: any;
    years: any;
    firstYear: any;
    selectYears: number;
    selectMonths: number;
    isSet: boolean;
    bindDocumentClickListener: any;
    onModelChange: Function;
    onTouchedChange: Function;
    constructor(domRenderer: DomRenderer);
    ngOnInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    createCalendar(): void;
    createMonth(): void;
    createYear(add?: number): void;
    getDate(currentDate: any): void;
    getMonthFirstDay(year: any, month: any): {
        'total': number;
        'day': number;
    };
    getSomeDay(day: any, add: any): {
        'y': number;
        'm': number;
        'd': number;
    };
    setDate(date?: any): void;
    selectYear(i: number, j: number, year: number): void;
    selectMonth(i: any, j: any): void;
    selectDate(value: any): void;
    selectdReset(): void;
    yearClick(): void;
    isDateValid(value: any): boolean;
    splitNum(v: any): number;
    formatZero(value: any): any;
    toPrev(event: any): void;
    toNext(event: any): void;
    toToady(): void;
    onDateSelect(event: any, item: any, index: number): void;
    onInputChange(value: any): void;
    onTimeFocus(): void;
    onTimeChange(type: string, value: string): void;
    onClick(): void;
    open(): void;
    close(): void;
    onDocumentClickListener(): void;
    offDocumentClickListener(): void;
    ngOnDestroy(): void;
}
export declare class CalendarModule {
}
