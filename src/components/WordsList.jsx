import { useState, useEffect } from "preact/hooks";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function WordsList() {
    const [items, setItems] = useState([]);
    // TODO: Check if we actually need this?
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Ensure we're on the client-side
        if (typeof window !== "undefined") {
            const storedItems = JSON.parse(localStorage.getItem("words"));
            console.log(storedItems);
            setItems(storedItems);
            setIsLoaded(true);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(items).map((key) => {
                return (
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="space-y-4">
                            {/* Word */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {key}
                                </h3>
                                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-12"></div>
                            </div>

                            {/* Definition */}
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Definition
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    {items[key]["definition"]}
                                </p>
                            </div>

                            {/* Example */}
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Example
                                </p>
                                {example ? (
                                    <p className="text-gray-600 italic leading-relaxed">
                                        "{example}"
                                    </p>
                                ) : (
                                    <div className="space-y-3">
                                        <p className="text-gray-400 italic">
                                            No example provided
                                        </p>
                                        <Dialog
                                            open={isDialogOpen}
                                            onOpenChange={setIsDialogOpen}
                                        >
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                    Add Example
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Add Example Sentence
                                                    </DialogTitle>
                                                </DialogHeader>
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="example">
                                                            Example sentence for
                                                            "{word}"
                                                        </Label>
                                                        <Textarea
                                                            id="example"
                                                            placeholder="Enter an example sentence..."
                                                            value={newExample}
                                                            onChange={(e) =>
                                                                setNewExample(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            onClick={() =>
                                                                setIsDialogOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            onClick={
                                                                handleSaveExample
                                                            }
                                                            disabled={
                                                                !newExample.trim()
                                                            }
                                                        >
                                                            Save Example
                                                        </Button>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
