import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header";
import { ArrowDown2 } from "iconsax-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Toggle } from "@/components/ui/Toggle";

type Section = "general" | "notifications";
type NotificationKey = keyof typeof DEFAULT_NOTIFICATIONS;

const DEFAULT_NOTIFICATIONS = {
  message: true,
  taskUpdate: false,
  taskDeadline: true,
  mentorHelp: false,
};

const LANGUAGES = ["English (Default)", "Spanish", "French"];
const TIMEZONES = ["English (Default)", "UTC", "GMT"];
const TIME_FORMATS = ["12 Hours", "24 Hours"];
const SECTIONS: Section[] = ["general", "notifications"];

const Dropdown: FC<{
                    label: string;
                    options: string[];
                    value: string;
                    onChange: (value: string) => void;
                  }> = ({ label, options, value, onChange }) => {
                    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-96 text-left flex items-center justify-between"
      >
        <span>{value}</span>
        <ArrowDown2 variant="Bold" color="#333" className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </Button>
      {isOpen && (
        <div className="absolute z-10 w-96 mt-1 bg-white border rounded-lg shadow-lg">
          {options.map(option => (
            <div
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => { onChange(option); setIsOpen(false); }}
            >
              <input
                type="radio"
                checked={value === option}
                className="mr-2"
                readOnly
              />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Settings: FC = () => {
  const { toggleSidebar } = useMainLayout();
  const [activeSection, setActiveSection] = useState<Section>("general");
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      language: LANGUAGES[0],
      timezone: TIMEZONES[0],
      timeFormat: TIME_FORMATS[1],
    },
  });

  const currentValues = watch();

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6">
        <div className="bg-white border-b border-gray-200">
          <div className="flex space-x-4">
            {SECTIONS.map(section => (
              <Button
                key={section}
                variant="tab"
                selected={activeSection === section}
                onClick={() => setActiveSection(section)}
                className="relative pb-3"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit(console.log)}>
            {activeSection === "general" ? (
              <div className="space-y-6">
                <Dropdown
                  label="Language"
                  options={LANGUAGES}
                  value={currentValues.language}
                  onChange={v => setValue("language", v)}
                />

                <Dropdown
                  label="Timezone"
                  options={TIMEZONES}
                  value={currentValues.timezone}
                  onChange={v => setValue("timezone", v)}
                />

                <div className="space-y-2">
                  <span className="block text-sm font-medium text-gray-700">
                    Time Format
                  </span>
                  <div className="flex space-x-4">
                    {TIME_FORMATS.map(format => (
                      <Button
                        key={format}
                        type="button"
                        variant="radio"
                        selected={currentValues.timeFormat === format}
                        onClick={() => setValue("timeFormat", format)}
                      >
                        {format}
                        <div className={cn(
                          "w-4 h-4 rounded-full border",
                          currentValues.timeFormat === format 
                            ? "border-blue-500 bg-blue-500" 
                            : "border-gray-300"
                        )} />
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" variant="primary">
                  Save Changes
                </Button>
              </div>
            ) : (
              <div className="mt-4 space-y-6">
                <div className="space-y-4">
                  {(Object.keys(notifications) as NotificationKey[]).map(key => (
                    <div key={key} className="flex items-center gap-4 py-3">
                      <Toggle
                        pressed={notifications[key]}
                        onPressedChange={() => setNotifications(prev => ({
                          ...prev,
                          [key]: !prev[key]
                        }))}
                      />
                      <h4 className="text-sm font-medium text-gray-900">
                        {key.replace(/([A-Z])/g, ' $1').trim()} Notifications
                      </h4>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  variant="primary"
                  onClick={() => console.log("Notifications:", notifications)}
                >
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;