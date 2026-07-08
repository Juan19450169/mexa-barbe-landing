function WhyChooseUsCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        flex flex-col items-center text-center
        p-6 rounded-2xl
        transition-all duration-300
        hover:bg-zinc-900
        hover:-translate-y-2
        hover:shadow-lg
        hover:shadow-yellow-500/10
      "
    >
      {/* Icono */}

      <div
        className="
          w-20 h-20
          flex items-center justify-center
          rounded-full
          border border-yellow-500/30
          bg-zinc-950
          transition-all duration-300
          group-hover:scale-110
          group-hover:border-yellow-500
        "
      >
        <Icon
          className="
            text-yellow-500
            text-4xl
            transition-all duration-300
            group-hover:rotate-6
          "
        />
      </div>

      {/* Título */}

      <h3 className="mt-6 text-xl font-semibold text-white">
        {item.title}
      </h3>

      {/* Descripción */}

      <p className="mt-2 text-gray-400 leading-6">
        {item.description}
      </p>
    </div>
  );
}

export default WhyChooseUsCard;