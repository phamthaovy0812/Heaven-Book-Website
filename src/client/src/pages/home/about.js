import React from 'react';

const about = () => {
    return (
        <div class="flex flex-col px-40">
           { [
                ['< Ranking >',
                 "Hoàn thành các thử thách và lên hạng.Trang trí hồ sơ của bạn với huy hiệu và danh hiệu. Đạt được một công việc tại công ty mơ ước của bạn.",
                 require('../../assets/Home/ranking.png')
                ]
                 ,
                 ['< Review >',
                 "Hoàn thành các thử thách và lên hạng.Trang trí hồ sơ của bạn với huy hiệu và danh hiệu. Đạt được một công việc tại công ty mơ ước của bạn.",
                 require('../../assets/Home/review.png')
                ]
                 ,
                 ['< Newfeed >',
                 "Hoàn thành các thử thách và lên hạng.Trang trí hồ sơ của bạn với huy hiệu và danh hiệu. Đạt được một công việc tại công ty mơ ước của bạn.",
                 require('../../assets/Home/newfeed.png')
                ]
           ].map(([title,desc,url],index)=>{
                return(
                    <div className={(index===1 ? " flex  flex-row-reverse items-center" : "flex  items-center")}>
                        <div class="max-w-xl ">
                            <h3 class="text-3xl font-bold">{title}</h3>
                            <p class="font-inter text-xl mt-5">{desc}</p>
                        </div>
                        <img alt="Thumbnail" src={url} class="m-auto " />
                    </div>
                )
            })}
        </div>
    );
};

export default about;