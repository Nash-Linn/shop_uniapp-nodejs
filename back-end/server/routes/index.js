var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/index_list/data", function (req, res, next) {
  res.send({
    code: 0,
    data: {
      topBar: [
        {
          id: 1,
          name: "推荐",
        },
        {
          id: 2,
          name: "运动户外",
        },
        {
          id: 3,
          name: "服饰内衣",
        },
        {
          id: 4,
          name: "鞋靴箱包",
        },
        {
          id: 5,
          name: "美妆个护",
        },
        {
          id: 6,
          name: "家具数码",
        },
        {
          id: 7,
          name: "食品母婴",
        },
      ],
      data: [
        {
          type: "swiperList",
          data: [
            { imgUrl: "../../static/img/swiper1.jpg" },
            { imgUrl: "../../static/img/swiper2.jpg" },
            { imgUrl: "../../static/img/swiper3.jpg" },
          ],
        },
        {
          type: "recommendList",
          data: [
            {
              bigUrl: "../../static/img/flower1.jpg",
              data: [
                {
                  imgUrl: "../../static/img/flower2.jpg",
                },
                {
                  imgUrl: "../../static/img/flower3.jpg",
                },
                {
                  imgUrl: "../../static/img/flower4.jpg",
                },
              ],
            },
            {
              bigUrl: "../../static/img/flower5.jpg",
              data: [
                {
                  imgUrl: "../../static/img/flower6.jpg",
                },
                {
                  imgUrl: "../../static/img/flower7.jpg",
                },
                {
                  imgUrl: "../../static/img/flower8.jpg",
                },
              ],
            },
          ],
        },
        {
          type: "commodityList",
          data: [
            {
              id: 1,
              imgUrl: "../../static/img/commodity1.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
            {
              id: 2,
              imgUrl: "../../static/img/commodity2.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
            {
              id: 3,
              imgUrl: "../../static/img/commodity3.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
            {
              id: 4,
              imgUrl: "../../static/img/commodity4.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
            {
              id: 5,
              imgUrl: "../../static/img/commodity5.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
            {
              id: 6,
              imgUrl: "../../static/img/commodity6.jpg",
              name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
              pprice: "￥299",
              oprice: "￥599",
              discount: "4.9折",
            },
          ],
        },
      ],
    },
  });
});

module.exports = router;
