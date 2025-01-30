const Services = () => {
  return (
    <div>
      <div className="w-full text-white bg-slate-950 py-32">
        <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl ">
          <h2 className="text-xl font-bold mb-10">
            {" "}
            <span className="text-yellow-400">#</span> Our Services
          </h2>
          <h2 className="text-3xl font-semibold max-w-xl">High-Imapct Services That Will Propel Your Company Forward</h2>
          <div className="w-full py-16 grid grid-cols-12">
            <div className="p-8 border border-slate-800 col-span-3">
              <p>text</p>
              <p>icon</p>
              <p>text</p>
            </div>
            <div className="p-8 border border-slate-800 col-span-3">
              <p>text</p>
              <p>icon</p>
              <p>text</p>
            </div>
            <div className="p-8 border border-slate-800 col-span-3">
              <p>text</p>
              <p>icon</p>
              <p>text</p>
            </div>
            <div className="p-8 border border-slate-800 col-span-3">
              <p>text</p>
              <p>icon</p>
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
