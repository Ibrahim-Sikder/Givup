import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { TActivity } from "@/types/type";
import Link from "next/link";

interface EducationProps {
    activityData: TActivity[];
    language: string,
}


const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const RecentNewsPost: React.FC<EducationProps> = ({ activityData, language }) => {
    const RehabilitatinFilterData = activityData.filter((edu) => edu.category === 'News')

    return (
        // <div>

        //     <div className="bg-gray-100 p-5 rounded mb-5">
        //         <TextField
        //             id="outlined-basic"
        //             label="Search Here"
        //             variant="outlined"
        //             fullWidth
        //             size="small"
        //             className="bg-white"
        //         />
        //     </div>

        //     <div className="bg-gray-100 p-5 rounded mt-10">
        //         <h3>Popular Post</h3>
        //         <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
        //         <div className="flex flex-col gap-3 mt-5">
        //             {RehabilitatinFilterData?.slice(0, 5).map((data) => (
        //                 <div key={data._id}>
        //                     <Link href={`/news/${data._id}`}>
        //                         <div className="flex gap-5 ">
        //                             {
        //                                 data.bng_Images?.slice(0, 1).map((img) => (
        //                                     <Image
        //                                         key={img}
        //                                         src={img}
        //                                         width={50}
        //                                         height={30}
        //                                         alt=""
        //                                         className="w-56 h-16 object-contain"
        //                                     />
        //                                 ))
        //                             }
        //                             <div>
        //                                 <p className="text-xs">{formatDate(data.date)}</p>
        //                                 <p className="text-sm">{language === 'ENG' ? data.english_short_description?.slice(0, 100) : data.bangla_short_description?.slice(0, 100)}</p>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        // </div>
        <div>

            <div className="bg-gray-100 p-5 rounded mb-5">
                <TextField
                    id="outlined-basic"
                    label="Search Here"
                    variant="outlined"
                    fullWidth
                    size="small"
                    className="bg-white"
                />
            </div>

            <div className="bg-gray-100 p-5 rounded mt-10">
                <h3>{language === 'ENG' ? 'Popular Post' : 'জনপ্রিয় পোস্ট'}</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-3 mt-5">
                    {RehabilitatinFilterData?.slice(1, 5).map((data) => (
                        <div key={data._id}>
                            <Link href={`/news/${data._id}`}>
                                <div className="flex gap-5 ">
                                    {
                                        data.bng_Images?.slice(0, 1).map((img) => (
                                            <div className="w-56 h-16" key={img}>
                                                <Image

                                                    src={img}
                                                    width={50}
                                                    height={30}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        ))
                                    }
                                    <div>
                                        <p className="text-xs">{formatDate(data.date)}</p>
                                        <p className="text-sm">{language === 'ENG' ? data.english_short_description?.slice(0, 100) : data.bangla_short_description?.slice(0, 100)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
};

export default RecentNewsPost;
