import {
  IconCloudUpload,
  IconDatabase,
  IconServer,
  IconWorld,
} from "@tabler/icons-react";

const features = [
  {
    name: "App Platform",
    description:
      "Monitor and manage your apps. Force deploy, monitor logs, scale instances and more.",
    icon: IconCloudUpload,
  },
  {
    name: "Droplets",
    description:
      "Total control of all your virtual machines. Everything you need in the palm of your hand.",
    icon: IconServer,
  },
  {
    name: "Database",
    description:
      "Stay connected to all your database instances and ensure health at all times.",
    icon: IconDatabase,
  },
  {
    name: "Domains",
    description:
      "Manage your DNS settings on the go. Add, edit or remove DNS records with a few taps.",
    icon: IconWorld,
  },
];

export function Features() {
  return (
    <div className="bg-primary-50 pt-24 pb-12 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="uppercase tracking-wide text-lg font-semibold mb-12 font-mono text-primary-600">
            Mobile Control
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Everything you need to manage your resources
          </p>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            Get total control of your DigitalOcean resources when you are away
            from your desk. Manage droplets, apps, databases and more.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
