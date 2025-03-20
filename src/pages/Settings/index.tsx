import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";
import SectionHeader from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Toggle } from "@/components/ui/Toggle";

const Settings: FC = () => {
  const { toggleSidebar } = useMainLayout();
  const [activeSection, setActiveSection] = useState("general");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false
  });

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      language: "English (Default)",
      timezone: "English (Default)",
      timeFormat: "24 Hours"
    }
  });

  const languages = ["English (Default)", "Spanish", "French"];
  const timezones = ["English (Default)", "UTC", "GMT"];
  
  const currentLanguage = watch("language");
  const currentTimezone = watch("timezone");
  const currentTimeFormat = watch("timeFormat");

  const onSubmit = (data: { language: string; timezone: string; timeFormat: string }) => {
    console.log("Form data:", data);
  };

  const selectLanguage = (lang: string) => {
    setValue("language", lang);
    setIsLanguageOpen(false);
  };

  const selectTimezone = (zone: string) => {
    setValue("timezone", zone);
    setIsTimezoneOpen(false);
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6">
        <SectionHeader title="" />
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-4">
            <Button
              variant="tab"
              selected={activeSection === "general"}
              onClick={() => setActiveSection("general")}
              type="button"
            >
              General
            </Button>
            <Button
              variant="tab"
              selected={activeSection === "notifications"}
              onClick={() => setActiveSection("notifications")}
              type="button"
            >
              Notifications
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {activeSection === "general" && (
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="w-96 text-left flex items-center justify-between"
                  >
                    <span>{currentLanguage}</span>
                    <ChevronDown 
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isLanguageOpen && "rotate-180"
                      )} 
                    />
                  </Button>
                  {isLanguageOpen && (
                    <div className="absolute z-10 w-96 mt-1 bg-white border rounded-lg shadow-lg">
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => selectLanguage(lang)}
                        >
                          <input
                            type="radio"
                            name="language"
                            value={lang}
                            checked={currentLanguage === lang}
                            onChange={() => {}}
                            className="mr-2"
                          />
                          {lang}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="hidden"
                    {...register("language")}
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timezone
                  </label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                    className="w-96 text-left flex items-center justify-between"
                  >
                    <span>{currentTimezone}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isTimezoneOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  {isTimezoneOpen && (
                    <div className="absolute z-10 w-96 mt-1 bg-white border rounded-lg shadow-lg">
                      {timezones.map((zone) => (
                        <div
                          key={zone}
                          className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => selectTimezone(zone)}
                        >
                          <input
                            type="radio"
                            name="timezone"
                            value={zone}
                            checked={currentTimezone === zone}
                            onChange={() => {}}
                            className="mr-2"
                          />
                          {zone}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="hidden"
                    {...register("timezone")}
                  />
                </div>

                {/* Time Format Buttons */}
                <div className="space-y-2">
                  <span className="block text-sm font-medium text-gray-700">Time Format</span>
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="radio"
                      selected={currentTimeFormat === "12 Hours"}
                      onClick={() => setValue("timeFormat", "12 Hours")}
                    >
                      <div className={`w-4 h-4 rounded-full border ${
                        currentTimeFormat === "12 Hours"
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`} />
                      12 Hours
                    </Button>
                    <Button
                      type="button"
                      variant="radio"
                      selected={currentTimeFormat === "24 Hours"}
                      onClick={() => setValue("timeFormat", "24 Hours")}
                    >
                      <div className={`w-4 h-4 rounded-full border ${
                        currentTimeFormat === "24 Hours"
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`} />
                      24 Hours
                    </Button>
                  </div>
                  <input
                    type="hidden"
                    {...register("timeFormat")}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                >
                  Save Changes
                </Button>
              </div>
            )}

            {activeSection === "notifications" && (
              <div className="mt-4 space-y-6">
                <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 py-3">
                    <Toggle 
                      pressed={notifications.message}
                      onPressedChange={() => handleNotificationChange('message')}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Message Notifications</h4>
                    </div>
                  
                  </div>

                  <div className="flex items-center gap-4 py-3">
                    <Toggle 
                      pressed={notifications.taskUpdate}
                      onPressedChange={() => handleNotificationChange('taskUpdate')}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Task Update </h4>
                    </div>
                    
                  </div>

                  <div className="flex items-center gap-4 py-3">
                    <Toggle 
                      pressed={notifications.taskDeadline}
                      onPressedChange={() => handleNotificationChange('taskDeadline')}
                    />  
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Task Deadline Notifications</h4>
                    </div>
                    
                  </div>

                  <div className="flex items-center gap-4 py-3">
                    <Toggle 
                      pressed={notifications.mentorHelp}
                      onPressedChange={() => handleNotificationChange('mentorHelp')}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Mentor Help Notifications</h4>
                    </div>
                    
                  </div>
                </div>

                <Button
                  type="button"
                  variant="primary"
                  onClick={() => console.log('Saving notification settings:', notifications)}
                  className="mt-6"
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