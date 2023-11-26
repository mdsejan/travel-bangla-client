const PackageCard = () => {
  return (
    <div className="card bg-base-100 border shadow rounded-md">
      <figure>
        <img
          src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/382230705_2306930852824300_1011948376688470307_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGb7UDjRWfUBAb1SyAToH_Mf3ebvjBJQPh_d5u-MElA-NPqueQZhINc8Qpzm1hUdacP8DGmTtDQT056btE9HN6q&_nc_ohc=9Wtu7uAS1b0AX8WSeFA&_nc_ht=scontent.fdac22-1.fna&oh=00_AfA0aFrb84EKoGE3hYYR18BmIq_8ADF5_CacCU4t42zR_Q&oe=6566888D"
          alt="Shoes"
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <div className="badge badge-outline">Adventure</div>
          <h2 className="text-xl font-bold text-[#21664e]">$500</h2>
        </div>
        <h2 className="card-title">Exploring Sundarbans</h2>
        <p>{`Embark on an unforgettable adventure to the Sundarbans, the world's largest mangrove forest.`}</p>
      </div>
    </div>
  );
};

export default PackageCard;
