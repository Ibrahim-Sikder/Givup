"use client";
import Image from "next/image";
import img1 from "../../../../src/assets/images/tarek-rahman/tarek2.jpg";
import Container from "@/components/share/Container";
import { useState } from "react";
import Modal from "./_components/Modal";

const BiographyPage = () => {
  const biography = [
    {
      id: 1,
      image: img1,
      title: "১৯৯১ সালের জাতীয় নির্বাচনে তারেক রহমানের ভূমিকা",
      content:
        "১৯৯১ সালের জাতীয় নির্বাচনের সময়, যখন স্বৈরাচারী শাসন থেকে গণতান্ত্রিক সরকারে রূপান্তর ঘটছিল তখন তারেক রহমান সক্রিয়ভাবে দলের পক্ষে সমর্থন জোগাড় করেছিলেন। তিনি বিএনপির জাতীয় প্রচারাভিযান কৌশল কমিটির সদস্য ছিলেন এবং তার মা খালেদা জিয়া যে পাঁচটি আসনে প্রতিদ্বন্দ্বিতা করছিলেন সেখানে নির্বাচনী প্রচারণার সমন্বয়ের দায়িত্বও পালন করেন। সেই সময়ে তিনি সক্রিয়ভাবে বগুড়ার বিএনপি ইউনিটগুলোকে সংগঠিত করেন এবং রাজনীতিকে আরও শক্তিশালী, কর্মীবান্ধব ও উন্নয়নমুখী করতে সহজাত সংস্কৃতি পরিবর্তন করেন",
    },
    {
      id: 2,
      image: img1,
      title: "১৯৯৬ সালের নির্বাচন: ভূমিকা ও সিদ্ধান্ত",
      content:
        "১৯৯১ সালের জাতীয় নির্বাচনে বিএনপির সাফল্য এবং নতুন সরকার গঠনের পর, তারেক রহমানকে তার অবদানের স্বীকৃতি হিসাবে দলের সিনিয়র ভূমিকার প্রস্তাব দেওয়া হয়েছিল। তবে তৃণমূল পর্যায়ে দলকে শক্তিশালী করতে পর্যাপ্ত সময় পাওয়ার জন্য তিনি উচ্চ পদে অনীহা প্রকাশ করেন। বহু বছর ধরে তিনি বিএনপির বগুড়া ইউনিটের উন্নয়নে তৎপর ছিলেন। ১৯৯৬ সালের জাতীয় নির্বাচনের সময়, দলের তৃণমূল এবং সিনিয়র নেতৃত্ব রহমানকে বগুড়া থেকে একটি আসনে প্রতিদ্বন্দ্বিতা করার জন্য অনুরোধ করেছিল। কিন্তু তিনি তৃণমূল পর্যায়ে তার কাজকে আরও এগিয়ে নেওয়া এবং তার মায়ের জন্য নির্বাচনী প্রচারণার সমন্বয় করার লক্ষ্যে প্রস্তাবটি প্রত্যাখ্যান করেন।",
    },
    {
      id: 3,
      image: img1,
      title:
        "১৯৯৬-২০০১ সালের আওয়ামী লীগ সরকারের বিরুদ্ধে আন্দোলন",
      content:
        "১৯৯৬-২০০১ সালে আওয়ামী লীগ সরকারের শাসনামলে, তারেক রহমান সরকারের কর্মকাণ্ডের বিরুদ্ধে আন্দোলন গড়ে তোলেন। তিনি সক্রিয়ভাবে অর্থনৈতিক বঞ্চনার সমস্যাগুলি মোকাবেলা করার জন্য প্রচারণা চালান এবং গ্রামীণ এলাকায় বসবাসকারী জনগণের দুর্দশার কথা প্রকাশ করার লক্ষ্যে দেশব্যাপী পরামর্শমূলক কর্মসূচিতে সফল হন। এই বৃহৎ পরিসরের কর্মসূচী, বাংলাদেশের ইতিহাসে এই প্রকৃতির প্রথম, সরকারের বিরুদ্ধে গণসংহতি গড়ে তোলে, যা ফলস্বরূপ, বিএনপিকে ক্ষমতায় ফেরাতে সহায়ক ভূমিকা পালন করে। খোলা পরিষদের মাধ্যমে নেতা নির্বাচনের জন্য তিনি বগুড়ায় গোপন ব্যালট পদ্ধতি প্রতিষ্ঠা করেন।",
    },
    {
      id: 4,
      image: img1,
      title: "জিয়াউর রহমান ফাউন্ডেশন ও রাজনৈতিক কর্মকাণ্ড",
      content:
        "২০০০ সালের ১৪  এপ্রিল, ১লা বৈশাখ, খুলনা জেলার দীঘলিয়া ও রূপসা থানায় আয়োজিত স্বাস্থ্যমেলার সফল আয়োজন দিয়ে যাত্রা শুরু হয় এই সংগঠনের। “একটি উদ্যোগ, একটু চেষ্টা, এনে দেবে সচ্ছলতা, দেশে আসবে স্বনির্ভরতা” এই স্লোগানকে মূলমন্ত্র ধরে যাত্রা শুরু করা জিয়াউর রহমান ফাউন্ডেশন-এর ভিশনারি প্রেসিডেন্ট জনাব তারেক রহমান বিশ্বাস করেন আমাদের দেশের প্রতিটি মানুষ যদি ছোট ছোট উদ্যোগ গ্রহণ করেন তাহলে এই দেশে অর্থনৈতিক উন্নতি আসবেই। এ লক্ষ্যে তিনি প্রাথমিক অবস্থায় জিয়াউর রহমান ফাউন্ডেশনের মাধ্যমে স্বাস্থ্যখাতে, শিক্ষাখাতে, কৃষিখাতে বিভিন্ন ধরনের সেবামূলক প্রকল্প গ্রহণ করেন। ২০০১ সালে অনুষ্ঠিত জাতীয় নির্বাচনে, দলটি দুই-তৃতীয়াংশ সংখ্যাগরিষ্ঠতা নিয়ে ব্যাপক বিজয় লাভ করে। সরকারের মধ্যে অবস্থান নেওয়ার জন্য দলের তৃণমূলের পাশাপাশি জাতীয় নেতৃত্বের পক্ষ থেকে রহমানের ওপর ব্যাপক চাপ ছিল। কিন্তু তিনি বারবার রাজি না হয়ে দলের মধ্যে কাজ করে যাওয়ার অঙ্গীকার করেন। জুন ২০০২ সালে, তিনি বিএনপির স্থায়ী কমিটি কর্তৃক যুগ্ম মহাসচিব নিযুক্ত হন। সিনিয়র যুগ্ম সাধারণ সম্পাদক হিসেবে দায়িত্ব নেওয়ার পর, রহমান দলের কর্মীদের দৃষ্টিভঙ্গি সম্পর্কে সচেতন হওয়ার লক্ষ্যে দেশের প্রতিটি জেলায় “তৃণমূল পর্যায়ের সম্মেলন” এর পাশাপাশি “বিভাগীয় সম্মেলন” এবং “উপজেলা সম্মেলন” নামে একটি কর্মসূচি চালু করেন। সারাদেশে দলের শতাধিক সভায়ও তিনি যোগ দেন, সেই সব সভায় দলের নেতারা তার সঙ্গে ছিলেন। ২০০২ সালে গোপালগঞ্জ জেলার টুঙ্গিপাড়া উপজেলা সফরকালে, বঙ্গবন্ধু শেখ মুজিবুর রহমানের সমাধি পরিদর্শন করেন যা রাজনৈতিক সহনশীলতা পরিচয়। এসময় তিনি বিভিন্ন সমাবেশে উপস্থিতদের উদ্দেশ্যে ব্যক্তিগতভাবে প্রতিক্রিয়া পত্রে স্বাক্ষর করেন। এই প্রতিক্রিয়া পত্রগুলিতে আঞ্চলিকভাবে নির্দিষ্ট সমস্যা এবং সেগুলি কীভাবে সমাধান করা যায় সে সম্পর্কে আলোচনা রয়েছে। এপ্রিলের প্রথম সপ্তাহে ১৮,০০০টি চিঠি স্বাক্ষরিত হয়। তিনি ২০০৯ সালে বিএনপির ৫ম জাতীয় কাউন্সিলে রহমান রহমানকে দলের সিনিয়র ভাইস-চেয়ারম্যান নির্বাচিত করেন।",
    },
    {
      id: 5,
      image: img1,
      title: "কল্যাণ সংস্থা প্রতিষ্ঠা ও রাজনৈতিক কর্মকাণ্ড",
      content:
        "তারেক রহমান বিভিন্ন কল্যাণ সংস্থা প্রতিষ্ঠায়ও অবদান রাখেন। হাঁস-মুরগি, দুগ্ধ ও মৎস্য খামার প্রতিষ্ঠার মাধ্যমে দরিদ্র জনগোষ্ঠীকে নানাভাবে স্বাবলম্বী হতে উদ্বুদ্ধ করতে তিনি দেশের বিভিন্ন স্থানে যান। ৪ জানুয়ারী ২০১৪-এ, ইউটিউবে পোস্ট করা একটি ভিডিও বার্তায়, রহমান বাংলাদেশে ৫ জানুয়ারির সাধারণ নির্বাচন বয়কটের আহ্বান জানান। তিনি বলেন, “সময় এসেছে আমাদের সকলের ৫ জানুয়ারির নির্বাচন প্রতিরোধ ও বর্জন করার। ব্যক্তিগত স্বার্থে নয়, দেশের অস্তিত্বের স্বার্থে।” ১ সেপ্টেম্বর ২০০৮-এ রহমানের মা খালেদা জিয়ার মুক্তির পর, তিনি সেন্ট জন’স উডের একটি বেসরকারি হাসপাতাল ওয়েলিংটন হাসপাতালে বিদেশী চিকিৎসার জন্য লন্ডন, যুক্তরাজ্যের উদ্দেশ্যে যাত্রা  করবেন। সেনাবাহিনী সমর্থিত ১/১১ অন্তর্বর্তীকালীন সরকার এর সময় উনার উপর অমানুষিক নির্যাতন করা হয়।",
    },
    {
      id: 6,
      image: img1,
      title: "রাজনৈতিক উদ্দেশ্যপ্রণোদিত মামলা",
      content:
        "দুর্নীতি দমন কমিশন তারেক রহমান এবং ব্যবসায়িক অংশীদার গিয়াসউদ্দিন আল মামুনের বিরুদ্ধে ১২ টি মামলা করেছে, যা রাজনৈতিকভাবে উদ্দেশ্যপ্রণোদিত এবং তারেক রহমানকে বাংলাদেশের রাজনীতিতে অংশগ্রহণ থেকে বিরত রাখার জন্য অতীতের তত্ত্বাবধায়ক সরকারের ষড়যন্ত্রের অংশ। তবে তার বিরুদ্ধে আনা সব অভিযোগ এখনো কমিশনে প্রমাণিত হয়নি। ১৬ অক্টোবর ২০০৯-এ হাইকোর্ট একটি রুল জারি করে সরকার এবং দুর্নীতি দমন কমিশন বাংলাদেশকে ব্যাখ্যা করতে বলে যে কেন খালেদা জিয়া ও রহমানের বিরুদ্ধে জিয়া অরফানেজ ট্রাস্ট দুর্নীতি মামলাটি জিয়ার দায়ের করা একটি পিটিশনে বাতিল করা হবে না। ২০ নভেম্বর ২০০৯, বিএনপি ছাত্র ফ্রন্ট জাতীয়তাবাদী ছাত্রদল (জেসিডি) তার পৈতৃক জেলা বগুড়ায় রহমানের ৪২ তম জন্মদিন পালনে সাত দিনব্যাপী অনুষ্ঠানের আয়োজন করে। অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন বিএনপি চেয়ারপারসন খালেদা জিয়া। ",
    },
    {
      id: 7,
      image: img1,
      title: "খালেদা জিয়া ও তারেক রহমানের পরিস্থিতি",
      content:
        "খালেদা জিয়া বলেন, তার ছেলে বিদেশ থেকে চিকিৎসা শেষে দেশে ফিরে সক্রিয় রাজনীতিতে অংশ নেবেন। তিনি বগুড়া যাওয়ার পথে কয়েকটি জনসভায় ভাষণ দেন এবং অভিযোগ করেন যে বর্তমান সরকার তার ছেলে যাতে দেশে ফিরতে না পারে সেজন্য তাকে হয়রানি করার চেষ্টা করছে। তিনি বলেন, “তারেক দেশের উন্নয়নের জন্য কাজ করেছেন, কিন্তু জাতীয় ও আন্তর্জাতিক ষড়যন্ত্রের অংশ হিসাবে তাকে ধ্বংস করার জন্য প্রচুর মামলা করা হয়েছিল।” তিনি আরও যোগ করেন, “২০০৭ সালের ৭ মার্চ তাকে তুলে নেওয়া হয়।  আমার ঠিক সামনেই একটি গাড়িতে। কিন্তু হেফাজতের পর আমার ছেলেকে স্ট্রেচারে চিকিৎসার জন্য বিদেশে পাঠাতে হয়েছে । চিকিৎসকরা বলেছেন তার সুস্থ হতে আরও সময় লাগবে” তিনি অভিযোগ করেন যে গত তত্ত্বাবধায়ক সরকার মিথ্যা মামলা করেছে। অনুষ্ঠানে বিএনপি মহাসচিব খন্দকার দেলোয়ার হোসেন বলেন, বর্তমান সরকারের জনপ্রিয়তা তলানিতে গিয়ে ঠেকেছে এবং তারা এখন তারেক রহমানকে হুমকি মনে করছে। তিনি আরও বলেন, তিনি যাতে ফিরতে না পারেন সেজন্য নতুন মামলা করা হচ্ছে।",
    },
    {
      id: 8,
      image: img1,
      title: " দায়িত্ব গ্রহণ ও আন্তর্জাতিক যোগাযোগ",
      content:
        "৮ ডিসেম্বর ২০০৯-এ বাংলাদেশ জাতীয়তাবাদী দলের ৫ তম জাতীয় কাউন্সিলে, রহমানকে দলের সিনিয়র ভাইস চেয়ারম্যান হিসাবে ঘোষণা করা হয়। তিনি লন্ডন থেকে জায়ান্ট স্ক্রিনের মাধ্যমে হাজির হয়ে বাংলাদেশের জনগণ এবং বাংলাদেশ জাতীয়তাবাদী দলের নেতাকর্মীদের উদ্দেশ্যে একটি সংক্ষিপ্ত বক্তৃতা করেন। রহমান স্বীকার করেন, তার চিকিৎসা এখনো চলছে। সুস্থ হয়ে বাংলাদেশে ফিরে নেতাকর্মীদের সঙ্গে যোগ দেবেন বলে আশা প্রকাশ করেন তিনি। ২৫ জুলাই ২০১৩, তারেক রহমানকে লন্ডনে দলের প্রবাসী সমর্থকদের দ্বারা আয়োজিত একটি ইফতার পার্টিতে আমন্ত্রণ জানানো হয়েছিল। তিনি তার ধারনা শেয়ার করেন এবং বাংলাদেশের উন্নয়নে উন্নয়ন কার্যক্রম পরিচালনার রূপরেখা দেন। ২০১৩ সালের সেপ্টেম্বরে, মার্কিন যুক্তরাষ্ট্র সরকারের কিছু প্রতিনিধি রহমানের সাথে দেখা করেন এবং কিছু দ্বিপাক্ষিক বিষয় নিয়ে আলোচনা করেন। রহমান তাদের জঙ্গিবাদের বিরুদ্ধে তার অবস্থানের আশ্বাস দেন।",
    },
    {
      id: 9,
      image: img1,
      title: "মামলা হতে খালাস ও সুপ্রিম কোর্টে  মামলা স্থগিত",
      content:
        "৭ জুন ২০০৭ তারিখে তারক রহমান এবং ব্যবসায়িক অংশীদার গিয়াসউদ্দিন আল মামুনের বিরুদ্ধে ঢাকার একটি আদালতে বাংলাদেশ দুর্নীতি দমন কমিশন কর্তৃক একটি মানি লন্ডারিং মামলা দায়ের করা হয়। ১৮ নভেম্বর ২০১৩ তারিখে আদালতের দেওয়া রায়ে, ২০.৪১ কোটি টাকার মামলায় রহমানকে খালাস দেওয়া হয়। বাংলাদেশ দুর্নীতি দমন কমিশনের সদস্য মোহাম্মদ শাহাবুদ্দিন রায় প্রত্যাখ্যান করে বলেছেন: “তারেক ও মামুনের অপরাধে সমান ভূমিকা ছিল। তাই আইনগতভাবে পার্থক্য করার সুযোগ নেই।” এটি ছিল সতেরটি মামলার একটিতে প্রথম রায়। এর মধ্যে ১২টি মামলা স্থগিত করেছে বাংলাদেশ সুপ্রিম কোর্ট। বিএনপির কর্মকর্তা ও নেতারা দাবি করেছেন যে এই রায় তার নির্দোষতার প্রমাণ এবং তার দুর্নীতির সাথে কোন সম্পৃক্ততা নেই এবং রহমানের বিরুদ্ধে সমস্ত মামলা “রাজনৈতিক উদ্দেশ্যপ্রণোদিত”।",
    },
    {
      id: 10,
      image: img1,
      title: "মার্কিন দূতাবাসের অভিমত",
      content:
        "৩ নভেম্বর ২০০৮-এ, একটি ফাঁস হওয়া মার্কিন দূতাবাসের তারে বলা হয় যে ঢাকার দূতাবাস বিশ্বাস করে যে রহমান “মহারাজনৈতিক দুর্নীতির জন্য দোষী যা মার্কিন জাতীয় স্বার্থের উপর মারাত্মক বিরূপ প্রভাব ফেলেছে”। ১৭ নভেম্বর ২০১৩ তারিখে বাংলাদেশের একটি মেট্রোপলিটন আদালতের দেওয়া রায়ে, আদালতের বিচারক বলেছিলেন যে খাদিজা ইসলাম, যিনি মামুনকে টাকা দিয়েছিলেন তিনি আদালতকে বলেননি যে তারেক রহমান ঘুষ চেয়েছিলেন বা তাকে দেওয়ার জন্য তাকে চাপ দিয়েছিলেন। কোম্পানী কাজ তারেক রহমান ১৬৪ ধারায় আদালতে স্বীকারোক্তিমূলক জবানবন্দি দেননি এবং আদালতে এমন কোনো নথি উপস্থাপন করা হয়নি যা প্রমাণ করে যে তিনি টাকা নিয়েছেন। তিনি বলেন, তারেক রহমান, মামুনের মাধ্যমে খাদিজাকে টাকা দাবি করার জন্য চাপ দিয়েছিলেন এমন দাবিও বিশ্বাসযোগ্য নয়। ৯ ডিসেম্বর রহমানের বিরুদ্ধে রেড নোটিশ প্রত্যাহার করা হয়। ",
    },
    {
      id: 11,
      image: img1,
      title: " রাজনৈতিক কর্মকাণ্ড",
      content:
        "জিয়া প্রাসাদ রাজনীতিক ছিলেন না এবং মন্ত্রীসভার বেশ কিছু বৈঠক করেন ঢাকা থেকে দূরে, দেশের বিভিন্ন গুরুত্বপূর্ণ স্থানে। এইরকম প্রথম বৈঠকটি হয়েছিল সিলেটে ১২ অক্টোবর ১৯৭৯। সেনাবাহিনীতে চাকরির অভিজ্ঞতার সুবাদে তিনি দীর্ঘ পথ পায়ে হেঁটে ভ্রমণে অভ্যস্ত ছিলেন। প্রায়ই তিনি গ্রামবাংলার এবড়োথেবড়ো পথ অনায়াসে পাড়ি দিয়েছেন। জিয়া এ ধরণের সফরে যেতেন উন্নয়ন প্রকল্পের অগ্রগতি পরিদর্শন করতে এবং জনগণের মন বুঝতে। জিয়ার এই ‘জানার জন্য হাঁটা’ অনুশীলনের শুরু ২৮ জানুয়ারি ১৯৭৭। সেদিন তিনি সিলেটের হাওড় অঞ্চলের শুকনো এলাকার ২২ মেইল পথ পায়ে হেঁটে অতিক্রম করেন। এই রকম শেষ পদযাত্রাটি ২১ এপ্রিল ১৯৮০ বগুড়া সার্কিটহাউজ থেকে শুরু করে একটানা সাত মেইল পথ অতিক্রম করে। রাজশাহী বিভাগের সকল সংসদ সদস্য সেই কাফেলায় তাদের নেতার সাথে শামিল হয়েছিলেন। অন্য যেভাবে জিয়া নিজেকে জনগণের কাছে নিয়ে গিয়েছেন সেগুলোর মধ্যে ছিল বিশেষ ট্রেনে করে ভ্রমণ। এ ধরণের ট্রেনযাত্রা তিনি শুরু করেন ১৯৮০ সালের শেষ দিকে। ৫ অক্টোবর একটি বিশেষ ট্রেনযোগে ঢাকা থেকে দুই দিনের সফরে উত্তরাঞ্চলের শহর দিনাজপুর যাত্রা করেন জিয়া।",
    },
    {
      id: 12,
      image: img1,
      title:
        "দ্য পলিটিক্যাল থট অফ তারেক রহমান",
      content:
        "বাংলাদেশ পলিসি ফোরাম কেমব্রিজ, একটি অলাভজনক সংস্থা, ২০১৩ সালে দ্য পলিটিক্যাল থট অফ তারেক রহমান শিরোনামে ১৭ টি নিবন্ধের একটি সংকলন প্রকাশ করে। বইটি জুন ২০১৩ সালে কেমব্রিজ বিশ্ববিদ্যালয়ে চালু করা হয়েছিল। আগস্ট ২০১৩ সালে, নিউ ইয়র্ক সিটির কলম্বিয়া বিশ্ববিদ্যালয়ে একটি আমেরিকান সংস্করণ চালু করা হয়েছিল, তারপরে অস্ট্রেলিয়ান, কানাডিয়ান এবং জার্মান সংস্করণগুলি যথাক্রমে নিউ সাউথ ওয়েলস বিশ্ববিদ্যালয়, টরন্টো বিশ্ববিদ্যালয় এবং উলম বিশ্ববিদ্যালয়ে সেপ্টেম্বর এবং অক্টোবর ২০১৩ এর মধ্যে চালু হয়েছিল। ২০১৮ নির্বাচনের সময় উনি লন্ডন থেকে দলকে নেতৃত্ব দেন । নির্বাচন পরবর্তী সময়ে দলকে সু-সংগঠিত করার লক্ষ্যে দিন রাত পরিশ্রম করে যাচ্ছেন এবং নেতৃত্ব দিচ্ছেন। দ্রুত সময়ের মধ্যে কমিটি করন, প্রত্যেকটা অনুষ্ঠানে নিজে ভার্চুয়ালি উপস্থিত থেকে তৃণমুল পর্যায়ের নেতৃবৃন্দদের সাথে মতবিনিময় উল্লেখযোগ্য। সম্প্রতি উনার “টেইক ব্যাক বাংলাদেশ” সর্বসাধারনের মাঝে ব্যাপক সাড়া জাগিয়েছে। রাষ্ট্র মেরামতের লক্ষ্যে মিডিয়া সেল গঠন করে সকল শ্রেনী-পেষার মানুষকে এক করে বি এন পি এর ভিশন সম্পর্কে উদ্ভুদ্ধ করা হচ্ছে। উনার নেতৃত্বে বাংলাদেসশ জাতীয়তাবাদী দল এই মুহুর্তে অনেক শক্তিশালী ও ঐক্যবদ্ধ।",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const handleOpen = (title: string, content: string) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };
  return (
    <Container>
      <div className="my-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            তারেক রহমানের সংক্ষিপ্ত পরিচিতি
          </h1>
          <p className="text-gray-600 mt-2">দেশনায়ক তারেক রহমান</p>
        </div>
        <div className="lg:flex gap-10 mb-10">
          <div className="w-[350px] lg:h-[400px] mx-auto">
            <Image
              src={img1}
              alt="Ziaur Rahman"
              className="rounded w-full lg:h-full object-cover"
            />
          </div>
          <div className="lg:w-[840px]">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 lg:mt-0 mt-10">
              জন্ম ও পরিবার
            </h2>
            <p className="text-gray-600 mb-2 text-justify">
              তারেক রহমান, বীর মুক্তিযোদ্ধা ও শহীদ রাষ্ট্রপতি জিয়াউর রহমান ও
              খালেদা জিয়ার প্রথম ছেলে। তিনি ১৯৬৫ সালের ২০
              নভেম্বর জন্মগ্রহণ করেন। তার বাবা ছিলেন বাংলাদেশের ৭ম রাষ্ট্রপতি
              এবং তার মা বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রী হিসেবে দায়িত্ব
              পালন করেন। উনার আদরের একমাত্র ছোট ভাই মরহুম আরাফাত রহমান কোকো।
              তিনি বাংলাদেশ নৌবাহিনীর প্রাক্তন নৌবাহিনী প্রধান রিয়ার অ্যাডমিরাল
              মাহবুব আলী খানের কনিষ্ঠ কন্যা চিকিৎসক জুবাইদা রহমানকে বিয়ে করেন।
              তাদের একটি মেয়ে, জাইমা রহমান । রাজনৈতিক প্রতিহিংসার শিকার হয়ে
              তিনি এখন লন্ডনে অবস্থান করছেন এবং সেখান থেকে দিন রাত পরিশ্রম করে
              দলকে সু-সংগঠিত করছেন এবং নেতৃত্ব দিচ্ছেন।
            </p>
            <p className="text-gray-600 mb-2 text-justify">
              তিনি সেন্ট জোসেফ উচ্চ মাধ্যমিক বিদ্যালয় (ঢাকা) এবং ঢাকা
              রেসিডেন্সিয়াল মডেল কলেজে পড়াশোনা করেছেন। প্রথমে তিনি ১৯৮৪ সালে
              ঢাকা বিশ্ববিদ্যালয়ে আইন বিভাগে ভর্তি হন তারপর বিশ্ববিদ্যালয়ের
              লোক প্রশাসন বিভাগে স্থানান্তরিত হন। ১৯৮৮ সালে, তারেক রহমান দলের
              গাবতলী উপজেলার প্রাথমিক সদস্য এবং পরে বগুড়া জেলা কমিটির সদস্য
              হিসাবে তার রাজনৈতিক জীবন শুরু করেন।
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {biography.map((data) => (
            <div
              key={data.id}
              className="rounded shadow-lg p-5 grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {/* Image section */}
              <div className="order-1 lg:order-2">
                <Image
                  src={data.image}
                  alt=""
                  className="w-full h-full rounded"
                />
              </div>

              {/* Text section */}
              <div className="order-2 lg:order-1">
                <h2 className="text-xl font-bold mb-3 text-center">
                  {data.title}
                </h2>
                <p className="text-justify">
                  {data.content?.slice(0, 300)}
                  <button
                    className="text-blue-600 text-xs"
                    onClick={() => handleOpen(data?.title, data?.content)}
                  >
                    ...See All
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
        {modalContent && (
          <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={modalContent.title}
          >
            <p>{modalContent.content}</p>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default BiographyPage;
