import Mock from 'mockjs';

const Random = Mock.Random;

// 总览 数据源
export const overviewData = Mock.mock({
    "code": 200,
    "message": "success",
    "data": {
        "file": Random.float(60, 100, 3, 3) + "Mb",
        "article||0-99": 0,
        "gallery||0-99": 0,
        "diary||0-99": 0,
        "project||0-99": 0,
        "resource||0-99": 0,
        "movie||0-99": 0,
    }
});