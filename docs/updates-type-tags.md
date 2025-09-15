# 🗂 Updates Type & Tags 規範

## 📌 Type（更新類型）

用於描述這筆更新的 **性質**，必填、單一值。

|Type|用途說明|
|---|---|
|`init`|專案初始化（通常僅出現一次）|
|`preview`|初版、PoC、MVP，尚未正式上線|
|`release`|正式上線版本（如：v1.0.0）|
|`update`|功能更新或新增（對應 feature）|
|`fix`|錯誤修正、部署修正|
|`refactor`|重構、內部調整（使用者不一定感受得到）|
|`test`|測試相關更新（e2e、CI 等）|
|`archive`|專案下架、關閉或停止維護|

---

## 🏷️ Tags（標籤）

用於補充 **技術堆疊 / 主題**，可多個值。

### 常用技術

- `React`
- `Tailwind CSS`
- `shadcn/ui`
- `Recharts`
- `Vite`
- `JavaScript`  
- `TypeScript` 

### 常用主題

- `Chrome Extension`
- `Reminder`
- `Dashboard` 
- `Portfolio`
- `Release`
- `Preview`
- `Testing`

---

## 📝 實例
```json
{
	"id": "2025-09-13-time-to-clock-out-preview",
	"date": "2025-09-13",
	"title": "Time To Clock Out：Chrome 擴充初版",
	"summary": "下班提醒 Chrome 擴充套件初版，提供下班時間提醒，目前可透過下載後手動匯入使用（尚未上架 Chrome Web Store）。",
	"tags": ["Chrome Extension", "Reminder", "JavaScript", "Preview"],
	"project": "time-to-clock-out",
	"type": "preview",
	"links": [
	{ "label": "Repo", "url": "https://github.com/jingyieva/time-to-clock-out" }
	]
}
```