export function ProcessOverview() {
  const steps = [
    { number: "1", title: "Pick a Service", desc: "Explore solutions tailored for you" },
    { number: "2", title: "Book an Appointment", desc: "Meet experts online or offline" },
    { number: "3", title: "Make Payment", desc: "Quick & secure payment options" },
    { number: "4", title: "Enjoy Your Service", desc: "Delivered with speed and accuracy" },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">4-Step Process</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[90px] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
              <h3 className="font-bold text-lg text-center mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
