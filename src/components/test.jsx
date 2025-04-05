<main className="flex flex-col min-h-screen w-full gap-4">
  <div className=" px-8 py-6 bg-white">
    <div className="flex justify-between items-center">
      {/* Left: Scheduling + Icons */}
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
          Scheduling
        </h2>
        <div className="flex items-center gap-5">
          <img src={womanfb} alt="avatar1" className="w-10 h-10 rounded-full" />
          <img src={woamnx} alt="avatar2" className="w-10 h-10 rounded-full" />
          <img src={fb} alt="Facebook" className="w-10 h-10" />
          <img src={tikto} alt="TikTok" className="w-10 h-10" />
          <img src={pin} alt="Pinterest" className="w-10 h-10" />
          <img src={insta} alt="Instagram" className="w-10 h-10" />
          <img src={yout} alt="YouTube" className="w-10 h-10" />
        </div>
      </div>

      {/* Right: Avatar and Name */}
      <div className="flex items-center gap-4">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <div className="flex gap-4 items-center">
          <h2 className="text-lg font-medium text-gray-800">Zippydray</h2>
          <IoChevronDown />
        </div>
      </div>
    </div>
  </div>

  <HeroFrame />

  <div className="flex justify-between items-center p-6">
    <h3 className="text-xl text-gray-900 font-semibold">Drafts</h3>
    <div className="flex gap-2 items-center">
      <AiFillAppstore className="text-gray-500" size={30} />
      <TfiMenuAlt className="text-gray-500" size={30} />
      <button className="bg-green-800 flex items-center justify-center gap-2 font-bold text-white px-4 py-2 rounded-md">
        <FaPlus className="" />
        <span>New</span>
      </button>
    </div>
  </div>

  {/* Drafts grid */}
  <div className="p-6 ">
    <div className="bg-gray-100 p-6">
      <DraftGrid />
    </div>
  </div>
</main>;
