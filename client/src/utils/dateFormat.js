export const formatDatetime = (date) => {
    const format = {
        weekday: { weekday: 'long' },
        date: {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        },
        hour: {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        },
    };

    const d = new Date(date);
    const fullDate = new Intl.DateTimeFormat('en', format.date).format(d);
    const weekday = new Intl.DateTimeFormat('en', format.weekday).format(d);
    const hour = new Intl.DateTimeFormat('en', format.hour).format(d);

    return `${fullDate} ~ ${weekday}, ${hour}`;
};

export const formatTodayDate = () => {
    const todayDate = new Date().setHours(0, 0, 0, 0);
    const dateFormat = { month: 'long', day: '2-digit', year: 'numeric' };

    return new Intl.DateTimeFormat('en', dateFormat).format(todayDate);
};
