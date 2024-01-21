import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'

dayjs.extend(relativeTime);
dayjs.locale('ko');

export function fromNow(time: string | Date) {
    return dayjs(time).fromNow();
}

export function formatTime(time: string | Date, format = 'YYYY.MM.DD h:mm A') {
    return dayjs(time).format(format);
}