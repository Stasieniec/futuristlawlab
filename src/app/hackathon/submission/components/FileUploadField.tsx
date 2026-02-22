'use client';

import React from 'react';

interface FileItem {
  file?: File;
  url: string;
  fileName: string;
}

interface FileUploadFieldProps {
  label: string;
  description: React.ReactNode;
  accept: string;
  files: FileItem[];
  uploading: boolean;
  onAddFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  disabled: boolean;
  inputId: string;
  addMoreText: string;
  emptyText: string;
  fileTypeHint: string;
  accentColor: 'blue' | 'purple' | 'green';
  fileIcon: React.ReactNode;
  dropZoneIcon: React.ReactNode;
}

const accentColorMap = {
  blue: {
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-700',
    uploadingText: 'text-blue-600',
    hoverBorder: 'hover:border-blue-500',
    browseText: 'text-blue-700',
  },
  purple: {
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-700',
    uploadingText: 'text-purple-600',
    hoverBorder: 'hover:border-purple-500',
    browseText: 'text-purple-700',
  },
  green: {
    iconBg: 'bg-green-100',
    iconText: 'text-green-700',
    uploadingText: 'text-green-600',
    hoverBorder: 'hover:border-green-500',
    browseText: 'text-green-700',
  },
};

export default function FileUploadField({
  label,
  description,
  accept,
  files,
  uploading,
  onAddFile,
  onRemoveFile,
  onDrop,
  disabled,
  inputId,
  addMoreText,
  emptyText,
  fileTypeHint,
  accentColor,
  fileIcon,
  dropZoneIcon,
}: FileUploadFieldProps) {
  const colors = accentColorMap[accentColor];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
      <label className="block text-lg font-semibold text-slate-900 mb-2">
        {label}
      </label>
      {description}

      {/* List of uploaded/selected files */}
      {files.length > 0 && (
        <div className="space-y-2 mb-4">
          {files.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                  {fileIcon}
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{item.fileName}</p>
                  {item.file && !item.url && <p className="text-xs text-amber-600">Ready to upload</p>}
                  {item.url && <p className="text-xs text-green-600">Uploaded</p>}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemoveFile(index)}
                className="text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          {uploading && (
            <p className={`text-sm ${colors.uploadingText} flex items-center gap-2`}>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </p>
          )}
        </div>
      )}

      {/* Drop zone for adding more files */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`border-2 border-dashed border-slate-300 rounded-lg p-6 text-center ${colors.hoverBorder} transition cursor-pointer`}
      >
        <input
          type="file"
          id={inputId}
          onChange={onAddFile}
          accept={accept}
          className="hidden"
          multiple
          disabled={disabled}
        />
        <label htmlFor={inputId} className="cursor-pointer">
          {dropZoneIcon}
          <p className="text-slate-600 font-medium">
            {files.length > 0 ? addMoreText : emptyText}, or <span className={colors.browseText}>browse</span>
          </p>
          <p className="text-slate-500 text-sm mt-1">{fileTypeHint}</p>
        </label>
      </div>
    </div>
  );
}
