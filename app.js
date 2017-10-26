var fs = require('fs')
	, gm = require('gm').subClass({imageMagick: true});

let imgWidth, imgHeight, imgNum, imgCropHeight = 500;//获取原始图片的宽,高,以500单位切割,imgNum多少份
// 取到图片的宽高
gm('test.jpg')
	.size(function (err, size) {
		if (!err)
			imgWidth = size.width// 取到图片宽度
		imgHeight = size.height// 取到图片高度
		imgNum = Math.ceil(imgHeight / imgCropHeight);// 向上取整获取可以切成多少份
		for (var i = 0; i < imgNum; i++) {
			gm("test.jpg").crop(imgWidth, 500, 0, imgCropHeight * i)
				.write('tesOutput' + i + '.jpg', function (err) {
					if (err) console.log(err);
					console.log('成功');
				});
		}
	});





