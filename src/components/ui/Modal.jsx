import React from 'react';

export function Modal({ children, onClose }) {
    console.log('Modal rendered, onClose:', onClose)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
                {/* Кнопка закрытия */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={(event) => {
                        event.stopPropagation()
                        console.log('Close button clicked')
                        if (onClose) onClose()
                    }}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
}
